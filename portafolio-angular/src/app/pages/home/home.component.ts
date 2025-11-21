import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  fullTitle = 'Bienvenid@s';
  typedTitle = '';
  idx = 0;

  subtitle = 'Desarrollador Web Front-End • Angular • TypeScript • UI/UX';
  showSubtitle = false;

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    this.typeTitle();
  }

  private typeTitle() {
    if (this.idx < this.fullTitle.length) {
      this.typedTitle += this.fullTitle[this.idx++];
      setTimeout(() => this.typeTitle(), 120);
    } else {
      // after title typed show subtitle with small delay
      setTimeout(()=> this.showSubtitle = true, 350);
    }
  }

  verProyectos(){ this.router.navigate(['/proyectos']); }
  irContacto(){ this.router.navigate(['/contacto']); }
}


