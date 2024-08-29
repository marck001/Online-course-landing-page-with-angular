import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-frontend-course',
  standalone: true,
  imports: [FaqComponent, RouterModule ],
  templateUrl: './frontend-course.component.html',
  styleUrl: '../general.courses.css'
})
export class FrontendCourseComponent {

}
