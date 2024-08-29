import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendCourseComponent } from './frontend-course.component';

describe('FrontendCourseComponent', () => {
  let component: FrontendCourseComponent;
  let fixture: ComponentFixture<FrontendCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
