import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
       
    },

    {
        path: "contacts",
        component: ContactsComponent,
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

