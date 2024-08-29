import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { PythonComponent } from './pages/courses/python/python.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { FormComponent } from './components/form/form.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { WebCourseComponent } from './pages/courses/web-course/web-course.component';
import { NetworkingComponent } from './pages/courses/networking/networking.component';
import { FrontendCourseComponent } from './pages/courses/frontend-course/frontend-course.component';
import { BackendCourseComponent } from './pages/courses/backend-course/backend-course.component';


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
        path: "courses/back-end",
        component: BackendCourseComponent,

    },
    {
        path: "courses/front-end",
        component: FrontendCourseComponent,

    },
    {
        path: "courses/networking",
        component: NetworkingComponent,

    },
    {
        path: "courses/full-stack",
        component:WebCourseComponent,

    },

    {
        path: "tutorials",
        component: TutorialsComponent,
    },

    {
        path: "tutorials/javascript",
        component: TutorialsComponent,
    },

    {
        path: "about",
        component: AboutComponent,
        
    },

    {
        path: "form",
        component: FormComponent,
        
    },

    {
        path: "subscription",
        component: SubscriptionComponent,
        
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

