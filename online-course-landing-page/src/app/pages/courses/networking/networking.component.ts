import { Component } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [FaqComponent, RouterModule ],
  templateUrl: './networking.component.html',
  styleUrl: '../general.courses.css'
})
export class NetworkingComponent {

}
