import { SubscriptionComponent } from './components/subscription/subscription.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CourseComponent } from './components/course/course.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, CardComponent, CourseComponent, FormComponent, FooterComponent, SubscriptionComponent,  ContactsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-course-landing-page';

  ngOnInit() {
    
  }
}
