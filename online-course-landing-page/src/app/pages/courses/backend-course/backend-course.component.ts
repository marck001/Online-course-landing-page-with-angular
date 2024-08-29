import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
@Component({
  selector: 'app-backend-course',
  standalone: true,
  imports: [FaqComponent ],
  templateUrl: './backend-course.component.html',
  styleUrl: '../general.courses.css'
})
export class BackendCourseComponent {

}
