import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';

export const routes: Routes = [
    {path:"docs", component:AboutPage},
    {path:"", component:Home},
    {path:"users/:id", component:Users},
];
