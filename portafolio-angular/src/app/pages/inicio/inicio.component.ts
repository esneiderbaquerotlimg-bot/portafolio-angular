import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit, OnInit {

  typedText = '';
  fullText = 'Transformo ideas en soluciones digitales reales';
  private index = 0;

  ngOnInit(): void {
    // typing effect
    this.startTyping();
  }

  ngAfterViewInit(): void {
    // scroll reveal
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible');
      });
    }, { threshold: 0.18 });
    els.forEach(el => obs.observe(el));
  }

  private startTyping(){
    const speed = 40;
    const step = () => {
      if (this.index < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.index++);
        setTimeout(step, speed);
      }
    };
    step();
  }
}



