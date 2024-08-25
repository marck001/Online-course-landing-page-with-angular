import { Component } from '@angular/core';
import { CourseComponent } from '../../components/course/course.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
