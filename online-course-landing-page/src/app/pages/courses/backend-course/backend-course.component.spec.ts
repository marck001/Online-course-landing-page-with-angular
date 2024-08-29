import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCourseComponent } from './backend-course.component';

describe('BackendCourseComponent', () => {
  let component: BackendCourseComponent;
  let fixture: ComponentFixture<BackendCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
