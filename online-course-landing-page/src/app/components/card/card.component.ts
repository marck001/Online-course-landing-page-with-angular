import { Component , AfterViewInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgFor, NgIf} from '@angular/common';

export interface Course {
  name: string;
  route: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})



export class CardComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('searchButton') searchButton!: ElementRef;
  @ViewChild('searchResults') searchResults?: ElementRef;


  searchTerm: string = '';
  showResults: boolean = false;
  courses: Course[] =[
    { name: 'Full-stack', route: 'courses/full-stack' },
    { name: 'Backend', route: 'courses/back-end' },
    { name: 'Machine Learning', route: 'courses/machine-learning' },
    { name: 'Data Science', route: 'courses/python' },
    { name: 'Front-end Development', route: 'courses/front-end' },
    { name: 'Networking', route: 'courses/networking'},
    { name: 'Javascript tutorial', route: 'tutorials/javascript'},
    { name: 'Linux tutorial', route: 'tutorials/linux'},
  ];


  filteredCourses:  Course[] = [];


  constructor(private router: Router, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    const inputEl = this.searchInput.nativeElement;
    const buttonEl = this.searchButton.nativeElement;
   


    inputEl.addEventListener('focus', () => {
      this.showResults = true;
    });

    inputEl.addEventListener('blur', () => {
      setTimeout(() => { this.showResults = false; }, 200);
    });

    inputEl.addEventListener('input', () => {
      this.filterCourses(inputEl.value);
    });

    if (this.searchResults) {
      const resultsEl = this.searchResults.nativeElement;
    resultsEl.addEventListener('mousedown', (event:Event) => {
      event.stopPropagation();
    });

  }

    buttonEl.addEventListener('click', () => {
      if (this.filteredCourses.length > 0) {
        this.navigateToCourse(this.filteredCourses[0].route);
      }
    });

   
  }

  filterCourses(query: string) {
    if (query) {
      this.filteredCourses = this.courses.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredCourses = [];
    }
  }



  navigateToCourse(route: string) {
    this.router.navigate([route]);
    this.showResults = false; 
  }




  }



