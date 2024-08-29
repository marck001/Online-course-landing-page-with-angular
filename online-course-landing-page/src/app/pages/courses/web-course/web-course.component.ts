import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
@Component({
  selector: 'app-web-course',
  standalone: true,
  imports: [FaqComponent],
  templateUrl: './web-course.component.html',
  styleUrl: '../general.courses.css'
})
export class WebCourseComponent {

}
