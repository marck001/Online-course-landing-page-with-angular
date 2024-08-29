import { isPlatformBrowser } from '@angular/common';
import { Component , OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

  private openChatButton: HTMLElement | null = null;
  private closeChatButton: HTMLElement | null = null;
  private chat: HTMLElement | null = null;
  private messagesList: HTMLElement | null = null;

  
  

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,

  ) {

  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      
      const openChatButton = this.elRef.nativeElement.querySelector(".open-chat")
      const closeChatButton = this.elRef.nativeElement.querySelector(".close")
      this.chat = this.elRef.nativeElement.querySelector(".chat")
      this.messagesList = this.elRef.nativeElement.querySelector('.messages ul');


      if(openChatButton)
      this.renderer.listen(openChatButton,'click', ()=>this.openChat())

      if(closeChatButton)
      this.renderer.listen(closeChatButton,'click',()=>this.closeChat())

      const form = this.elRef.nativeElement.querySelector('.chat__form');
      if (form) {
        this.renderer.listen(form, 'submit', (event) => this.handleFormSubmit(event));
      }

    }
  }


  openChat():void{

  if(this.chat?.classList.contains("close-chat-animation")){
    this.renderer.removeClass(this.chat,"close-chat-animation")
  }
  this.renderer.addClass(this.chat,"open-chat-animation")
  }


  closeChat():void{
    this.renderer.addClass(this.chat,"close-chat-animation")
    this.renderer.removeClass(this.chat,"open-chat-animation")
  }

  handleFormSubmit(event: Event): void {
    event.preventDefault();
    const input: HTMLInputElement | null = this.elRef.nativeElement.querySelector('.chat__form input');
    const messageText = input?.value.trim();

    if (messageText && this.messagesList) {
      this.addMessage('user', messageText);

      if (input) {
        input.value = ''; 
      }
    }
  }

  addMessage(sender: 'user', text: string): void {
    if (this.messagesList) {
      const li = this.renderer.createElement('li');
      const dots = this.renderer.createElement('div');
      const content = this.renderer.createElement('div');

      this.renderer.addClass(dots, 'dots');
      this.renderer.appendChild(dots, this.renderer.createElement('span'));
      this.renderer.appendChild(dots, this.renderer.createElement('span'));
      this.renderer.appendChild(dots, this.renderer.createElement('span'));

      this.renderer.addClass(content, 'content');
      this.renderer.setProperty(content, 'innerHTML', text);

      this.renderer.appendChild(li, dots);
      this.renderer.appendChild(li, content);
      this.renderer.addClass(li, sender);

      this.renderer.appendChild(this.messagesList, li);
      this.chat?.querySelector('.chat__content')?.scrollTo(0, this.messagesList.scrollHeight);
    }
  }

}
