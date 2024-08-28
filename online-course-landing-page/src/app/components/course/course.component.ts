import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2, HostListener} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  private slider: HTMLElement | null = null;
  private leftBtn: HTMLElement | null = null;
  private rightBtn: HTMLElement | null = null;
  private slides: number = 0;
  private slidesPerPage: number = 0;
  private currentPosition: number = 0;
  private currentMargin: number = 0;
  private slidesCount: number = 0;
  private containerWidth: number = 0;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const containers = this.elRef.nativeElement.querySelectorAll('.slider-container');
      
      containers.forEach((container: any )=> {
        this.slider = container.querySelector('.slider');
        this.leftBtn = container.querySelector('.left-btn');
        this.rightBtn = container.querySelector('.right-btn');
        this.slides = container.querySelectorAll('course').length;
        this.containerWidth = container.offsetWidth;
        /*
        this.setParams(this.containerWidth);
        
        */
    
          this.renderer.listen(this.leftBtn, 'click', () => this.slideLeft());
          this.renderer.listen(this.rightBtn, 'click', () => this.slideRight());
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.containerWidth = this.elRef.nativeElement.querySelector('.slider-container').offsetWidth;
    this.setParams(this.containerWidth);
    
  }

  setParams(w: number): void {
    if (w < 951) {
      this.slidesPerPage = 1;
    } else if (w < 1501) {
      this.slidesPerPage = 2;
    } else if (w < 2520) {
      this.slidesPerPage = 3;
    } else {
      this.slidesPerPage = 4;
    }
    this.slidesCount = this.slides - this.slidesPerPage;

    if (this.currentPosition > this.slidesCount) {
      this.currentPosition = this.slidesCount;
    }
    this.currentMargin = -this.currentPosition * (100 / this.slidesPerPage);
    if (this.slider) {
      this.renderer.setStyle(this.slider, 'marginLeft', this.currentMargin + '%');
    }
    this.updateButtons();
  }

  updateButtons(): void {
    if (this.currentPosition <= 0 && this.leftBtn) {
      this.renderer.addClass(this.leftBtn, 'inactive');
    } else if (this.leftBtn) {
      this.renderer.removeClass(this.leftBtn, 'inactive');
    }

    if (this.currentPosition >= this.slidesCount && this.rightBtn) {
      this.renderer.addClass(this.rightBtn, 'inactive');
    } else if (this.rightBtn) {
      this.renderer.removeClass(this.rightBtn, 'inactive');
    }
  }

  slideLeft(): void {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      this.currentMargin += (100 / this.slidesPerPage);
      if (this.slider) {
        this.renderer.setStyle(this.slider, 'marginLeft', this.currentMargin + '%');
      }
      this.updateButtons();
    }
  }

  slideRight(): void {
    if (this.currentPosition < this.slidesCount) {
      this.currentPosition++;
      this.currentMargin -= (100 / this.slidesPerPage);
      if (this.slider) {
        this.renderer.setStyle(this.slider, 'marginLeft', this.currentMargin + '%');
      }
      this.updateButtons();
    }
  }
}