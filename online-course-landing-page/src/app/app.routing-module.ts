import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
const routes: Routes = [
    /*
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'contacts',
        component: ContactsComponent,

        
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
     */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
