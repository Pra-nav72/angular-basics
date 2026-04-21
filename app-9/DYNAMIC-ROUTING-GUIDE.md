# Dynamic Routing in Angular

This guide explains how to implement dynamic routing to pass parameters (like IDs) through the URL.

---

## Step 1: Define the Route with a Parameter

In `app.routes.ts`, define a route with a **parameter** using `:paramName`:

```typescript
// filepath: src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "users/:id", component: Users },  // :id is the dynamic parameter
];
```

- `:id` is a **placeholder** — it matches any value in the URL
- Example URLs: `/users/1`, `/users/42`, `/users/abc`

---

## Step 2: Create the Link with Dynamic Value

In the **source** component (Home), use `[routerLink]` with an array. The second element is the **dynamic value** (no quotes):

```typescript
// filepath: src/app/pages/home/home.ts
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],  // ← Import RouterLink
  ...
})
```

```html
<!-- filepath: src/app/pages/home/home.html -->
@for(user of userData(); track user.id){
    <!-- WRONG: 'user.id' (string literal) -->
    <!-- CORRECT: user.id (property access) -->
    <a [routerLink]="['/users', user.id]">{{user.name}}</a>
}
```

| Syntax | Result |
|--------|--------|
| `['/users', 'user.id']` | URL = `/users/user.id` (string) |
| `['/users', user.id]` | URL = `/users/1` (dynamic) |

---

## Step 3: Read the Parameter in the Target Component

In the **target** component (Users), inject `ActivatedRoute` to access URL parameters:

```typescript
// filepath: src/app/pages/users/users.ts
import { ActivatedRoute } from '@angular/router';

@Component({ ... })
export class Users {
  constructor(
    public userService: UserService,
    public route: ActivatedRoute  // ← Inject ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.userService.userList();
    
    // Subscribe to route parameters
    this.route.params.subscribe((params) => {
      const id = params['id'];  // Get the :id value from URL
      const filterData = data.filter((item) => item.id == id);
      this.userData.set(filterData[0]);
    });
  }
}
```

### How it works:
1. `route.params` is an **Observable** that emits whenever the URL changes
2. `params['id']` extracts the value from the `:id` placeholder
3. Use that ID to filter/fetch the specific data

---

## Step 4: Display the Data

```html
<!-- filepath: src/app/pages/users/users.html -->
<h1>{{userData().name}}'s detail</h1>
<ul>
    <li>ID: {{userData().id}}</li>
    <li>Name: {{userData().name}}</li>
    <li>Email: {{userData().email}}</li>
</ul>
```

---

## Quick Reference

| File | What to do |
|------|-------------|
| `app.routes.ts` | Define route as `path: 'users/:id'` |
| Source component (.ts) | Import `RouterLink` |
| Source component (.html) | Use `[routerLink]="['/users', user.id]"` |
| Target component (.ts) | Inject `ActivatedRoute`, subscribe to `params` |
| Target component (.html) | Display data from signal |

---

## Alternative: Get Param Directly (No Subscription)

If you only need the initial value and don't need to react to changes:

```typescript
ngOnInit() {
  const id = this.route.snapshot.params['id'];
  // Use id directly
}
```

> Use `snapshot` when you don't need to react to navigation changes. Use `params.subscribe()` when you do.