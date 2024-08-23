import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { HeaderComponent } from '../layout/header/header.component';
import { CardComponent } from '../components/card/card.component';
//import { CourseComponent } from '../components/course/course.component';
import { FormComponent } from '../components/form/form.component';
import { FooterComponent } from '../layout/footer/footer.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
