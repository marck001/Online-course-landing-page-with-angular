import { Component , OnInit, ElementRef, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}


  ngOnInit(): void {
    const watchButton = this.elRef.nativeElement.querySelector('.watch-video-button');
    if (watchButton) {
      this.renderer.listen(watchButton, 'click', () => this.playVideo());
    }
  }

  playVideo(): void {
    const iframe = this.elRef.nativeElement.querySelector('.youtube-iframe');
    if (iframe) {
      const src = iframe.getAttribute('src');
      if (src && !src.includes('autoplay=1')) {
        iframe.setAttribute('src', src + '?autoplay=1');
      }
    }
  }

}
