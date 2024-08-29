import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [FaqComponent, RouterModule],
  templateUrl: './python.component.html',
  styleUrl: '../general.courses.css'
})
export class PythonComponent {

}
