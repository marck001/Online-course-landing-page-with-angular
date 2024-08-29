import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [FaqComponent, RouterModule],
  templateUrl: './machine.component.html',
  styleUrl: '../general.courses.css'
})
export class MachineComponent {

}
