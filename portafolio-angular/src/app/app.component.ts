import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  mostrarHeaderFlag: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.mostrarHeaderFlag = event.urlAfterRedirects === '/';
      });
  }

  ngAfterViewInit(): void {
    const preloader = document.getElementById('preloader');
    if (preloader) setTimeout(() => preloader.style.display = 'none', 300);
  }

  mostrarHeader(): boolean {
    return this.mostrarHeaderFlag;
  }
}



