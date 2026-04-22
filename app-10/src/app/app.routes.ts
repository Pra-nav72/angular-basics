import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { PersonalDetails } from './pages/personal-details/personal-details';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {path:"", component:Home},

    // LAZY LOADING the following component(profile): page will load when user request
    // {path:"profile", component:Profile, 
    {path:"profile", loadComponent:()=>import('./pages/profile/profile').then((c)=>c.Profile), 
        children:[
        // select personal-details by default when on profile page
        /* 
            whenever user go to the profile page, inside profile page IF nothing is
            given(/profile), then redirect it to (/profile/personal-details).
        */
        {path:"", redirectTo:"personal-details", pathMatch:"full"},
        {path:"personal-details", component:PersonalDetails},
        // lazy loading settings.
        // {path:"settings", component:Settings},
        {path:"settings", loadComponent:()=>import('./pages/settings/settings').then((c)=>c.Settings)},
    ]},

];
