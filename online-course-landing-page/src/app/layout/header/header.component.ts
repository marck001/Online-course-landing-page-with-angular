import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformId: any

  ) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = this.elRef.nativeElement.querySelector('#navbar');
      this.sticky = navbar.offsetTop;
      this.renderer.listen('window', 'scroll', () => this.onScroll(navbar));

      this.toggle = this.elRef.nativeElement.querySelector('#menu-icon');
      this.menu = this.elRef.nativeElement.querySelector('.header-content');
      this.row2 = this.elRef.nativeElement.querySelector('.hidden');
      this.items = this.elRef.nativeElement.querySelectorAll('.dropdown');

      if (this.toggle) {
        this.renderer.listen(this.toggle, 'click', () => this.toggleNavMenu());
      }

      if (this.items) {
        this.items.forEach(item => {
          this.renderer.listen(item, 'click', (event) => this.toggleItem(event, item));
        });
      }

      this.renderer.listen('document', 'click', (event) => this.closeDropDown(event));
    }
  }


  onScroll(navbar: HTMLElement): void {
    if (window.scrollY >= this.sticky) {

      this.renderer.addClass(navbar, 'sticky');
    } else {

      this.renderer.removeClass(navbar, 'sticky');
    }
  }

  toggleNavMenu(): void {
    if (this.menu && this.row2 && this.toggle) {
      const isActive = this.menu.classList.contains('active') && this.row2.classList.contains('active');

      if (isActive) {
        this.renderer.removeClass(this.menu, 'active');
        this.renderer.removeClass(this.row2, 'active');
        this.renderer.setProperty(this.toggle, 'innerHTML', "<i class='fa-solid fa-bars'></i>");
      } else {
        this.renderer.addClass(this.menu, 'active');
        this.renderer.addClass(this.row2, 'active');
        this.renderer.setProperty(this.toggle, 'innerHTML', "<i class='fa-solid fa-times'></i>");
      }
    }
  }

  toggleItem(event: Event, item: HTMLElement): void {
    event.stopPropagation();

    if (this.items) {
      this.items.forEach(dropdown => {
        if (dropdown !== item) {
          this.renderer.removeClass(dropdown, 'dropdown-content-active');
        }
      });
    }

    this.renderer.addClass(item, 'dropdown-content-active');
  }

  closeDropDown(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown-content') && !target.closest('.dropdown')) {
      if (this.items) {
        this.items.forEach(item => {
          this.renderer.removeClass(item, 'dropdown-content-active');
        });
      }
    }
  }



}
