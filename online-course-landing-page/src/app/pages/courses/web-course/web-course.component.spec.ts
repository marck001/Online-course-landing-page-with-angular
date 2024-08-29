import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCourseComponent } from './web-course.component';

describe('WebCourseComponent', () => {
  let component: WebCourseComponent;
  let fixture: ComponentFixture<WebCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
