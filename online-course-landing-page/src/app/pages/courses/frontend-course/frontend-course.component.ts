import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
@Component({
  selector: 'app-frontend-course',
  standalone: true,
  imports: [FaqComponent ],
  templateUrl: './frontend-course.component.html',
  styleUrl: '../general.courses.css'
})
export class FrontendCourseComponent {

}
