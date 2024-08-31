import { isPlatformBrowser } from '@angular/common';
import { Component , OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from '../../components/chat/chat.component';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterModule, ChatComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

  ngOnInit(): void {
    
  }

}
