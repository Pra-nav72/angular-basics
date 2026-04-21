import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Docs } from './pages/docs/docs';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"profile", component:Profile},
    {path:"docs", component:Docs},
];
