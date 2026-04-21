import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"contact", component:Contact},
    {path:"about", component:About},
    {path:"pranav", redirectTo:'about'},
    {path:"**", component:PageNotFound},
];
