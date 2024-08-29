import { Component } from '@angular/core';
import { CourseComponent } from '../../components/course/course.component';
import { CardComponent } from '../../components/card/card.component';
import { FaqComponent } from '../../components/faq/faq.component';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent, CardComponent, FaqComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  
}
