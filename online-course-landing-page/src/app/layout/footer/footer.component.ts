import { Component ,OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2,} from '@angular/core';
import { LogoService } from '../../services/logo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
    private logoService: LogoService

  ) {

  }

  getElref():ElementRef{
    return this.elRef;
  }

  getRenderer():Renderer2{
    return this.renderer;
  }
  

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {


      const fullLogo = this.elRef.nativeElement.querySelector('#full-logo') as HTMLImageElement;

      this.logoService.setFooterLogo(fullLogo)

    }


  }
}
