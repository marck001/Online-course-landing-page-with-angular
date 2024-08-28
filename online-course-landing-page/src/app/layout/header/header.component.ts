import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LogoService } from '../../services/logo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private sticky: number = 0;
  private toggle: HTMLElement | null = null;
  private menu: HTMLElement | null = null;
  private row2: HTMLElement | null = null;
  private items: NodeListOf<HTMLElement> | null = null;

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
      const navbar =  this.getElref().nativeElement.querySelector('#navbar');
      if(navbar){
      this.sticky = navbar.offsetTop;
      this.getRenderer().listen('window', 'scroll', () => this.onScroll(navbar));
      }

      this.toggle =  this.getElref().nativeElement.querySelector('#menu-icon');
      this.menu = this.getElref().nativeElement.querySelector('.header-content');
      this.row2 = this.getElref().nativeElement.querySelector('.hidden');
      this.items = this.getElref().nativeElement.querySelectorAll('.dropdown');
      const logoImg = this.elRef.nativeElement.querySelector('#logo-img') as HTMLImageElement;

      this.logoService.setHeaderLogo(logoImg)

      if (this.toggle) {
        this.getRenderer().listen(this.toggle, 'click', () => this.toggleNavMenu());
      }

      if (this.items) {
        this.items.forEach(item => {
          this.getRenderer().listen(item, 'click', (event) => this.toggleItem(event, item));
        });
      }

      this.getRenderer().listen('document', 'click', (event) => this.closeDropDown(event));
    }
  }


  onScroll(navbar: HTMLElement): void {
    if (window.scrollY >= this.sticky) {

      this.getRenderer().addClass(navbar, 'sticky');
    } else {

      this.getRenderer().removeClass(navbar, 'sticky');
    }
    
  }

  toggleNavMenu(): void {
    if (this.menu && this.row2 && this.toggle) {
      const isActive = this.menu.classList.contains('active') && this.row2.classList.contains('active');

      if (isActive) {
        this.getRenderer().removeClass(this.menu, 'active');
        this.getRenderer().removeClass(this.row2, 'active');
        this.getRenderer().setProperty(this.toggle, 'innerHTML', "<i class='fa-solid fa-bars'></i>");
      } else {
        this.getRenderer().addClass(this.menu, 'active');
        this.getRenderer().addClass(this.row2, 'active');
        this.getRenderer().setProperty(this.toggle, 'innerHTML', "<i class='fa-solid fa-times'></i>");
      }
    }
  }

  toggleItem(event: Event, item: HTMLElement): void {
    event.stopPropagation();

    if (this.items) {
      this.items.forEach(dropdown => {
        if (dropdown !== item) {
          this.getRenderer().removeClass(dropdown, 'dropdown-content-active');
        }
      });
    }

    this.getRenderer().addClass(item, 'dropdown-content-active');
  }

  closeDropDown(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown-content') && !target.closest('.dropdown')) {
      if (this.items) {
        this.items.forEach(item => {
          this.getRenderer().removeClass(item, 'dropdown-content-active');
        });
      }
    }
  }

}
