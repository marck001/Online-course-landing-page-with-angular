import { SubscriptionComponent } from './components/subscription/subscription.component';
import { Component , OnInit} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd ,  ActivatedRoute, provideRouter, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CourseComponent } from './components/course/course.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { LogoService } from './services/logo.service';
import { routeTransition } from './route-transition';
import { provideAnimations } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, CardComponent, CourseComponent,
     FormComponent, FooterComponent, SubscriptionComponent, 
      ContactsComponent, AboutComponent ],
      animations:[ routeTransition],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'online-course-landing-page';
  currentRouteData: any;

  constructor(private logoService: LogoService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let currentRoute = this.router.routerState.root;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      this.currentRouteData = currentRoute.snapshot.data;
    });

  }


  ngOnInit(): void {
    const logoImg = this.logoService.getHeaderLogo();
    const fullLogo = this.logoService.getFooterLogo();

 
   

    if (logoImg && fullLogo) {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      this.currentTheme(logoImg, fullLogo, prefersDarkScheme);

      const btn = document.getElementById("btn-toggle");

    
      btn?.addEventListener("click", () => {
        this.toggleTheme(logoImg, fullLogo, prefersDarkScheme);
      });
    }
  }

  currentTheme(logoImg: HTMLImageElement, fullLogo: HTMLImageElement, prefersDarkScheme: MediaQueryList): void {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
      logoImg.src = "src/assets/img/logo/full-logo-dark-style.png";
      fullLogo.src = "src/assets/img/logo/full-logo-dark-style.png";
    } else if (currentTheme === "light") {
      document.body.classList.add("light-theme");
      logoImg.src = "src/assets/img/logo/logo-light1.png";
      fullLogo.src = "src/assets/img/logo/full-logo-light-style.png";
    } else if (prefersDarkScheme.matches) {
      document.body.classList.add("dark-theme");
      logoImg.src = "src/assets/img/logo/logo-dark-style.png";
      fullLogo.src = "src/assets/img/logo/full-logo-dark-style.png";
    }
  }

  toggleTheme(logoImg: HTMLImageElement, fullLogo: HTMLImageElement, prefersDarkScheme: MediaQueryList): void {
    if (document.body.classList.contains("dark-theme") || document.body.classList.contains("light-theme")) {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
    } else {
      if (prefersDarkScheme.matches) {
        document.body.classList.add("light-theme");
      } else {
        document.body.classList.add("dark-theme");
      }
    }

    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    logoImg.src = theme === "dark" ? "src/assets/img/logo/logo-dark-style.png" : "src/assets/img/logo/logo-light1.png";
    fullLogo.src = theme === "dark" ? "src/assets/img/logo/full-logo-dark-style.png" : "src/assets/img/logo/full-logo-light-style.png";
  }

}
