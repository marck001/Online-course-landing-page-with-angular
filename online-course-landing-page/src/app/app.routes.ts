import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { PythonComponent } from './pages/courses/python/python.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
       
    },
    {
        path: "contacts",
        component: ContactsComponent,
    },
    {
        path: "courses",
        component: CoursesComponent,
    },

    {
        path: "courses/python",
        component: PythonComponent,

    },
    {
        path: "tutorials",
        component: TutorialsComponent,

    },

    {
        path: "about",
        component: AboutComponent,
        
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

