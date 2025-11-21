import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

type Proyecto = { 
  id: number; 
  titulo: string; 
  descripcion: string; 
  imagen: string; 
  tecnologias: string[]; 
  ruta?: string;
};

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  constructor(private router: Router) {}

  proyectos: Proyecto[] = [
    { 
      id: 1,
      titulo: 'Unidad 1',
      descripcion: 'Proyecto correspondiente a la Unidad 1.',
      imagen: 'assets/proyectos/unidad1.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      ruta: '/unidad1'
    },
    { 
      id: 2,
      titulo: 'Unidad 2',
      descripcion: 'Proyecto correspondiente a la Unidad 2.',
      imagen: 'assets/proyectos/unidad2.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      ruta: '/unidad2'
    }
  ];

  modalOpen = false;
  selected: Proyecto | null = null;

  openModal(p: Proyecto){
    this.selected = p;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(){
    this.modalOpen = false;
    this.selected = null;
    document.body.style.overflow = '';
  }

  volver(){ this.router.navigate(['/']); }

  siguiente(){ this.router.navigate(['/contacto']); }

  abrirArchivo(p: Proyecto){
    alert('Tu dispositivo no permite abrir el archivo.');
  }
}

