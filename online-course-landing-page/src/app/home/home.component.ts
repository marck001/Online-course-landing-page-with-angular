import { Component } from '@angular/core';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
//import { HeaderComponent } from '../layout/header/header.component';
import { CardComponent } from '../components/card/card.component';
import { CourseComponent } from '../components/course/course.component';
import { FormComponent } from '../components/form/form.component';
//import { FooterComponent } from '../layout/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  CardComponent,  FormComponent,  SubscriptionComponent,  CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
