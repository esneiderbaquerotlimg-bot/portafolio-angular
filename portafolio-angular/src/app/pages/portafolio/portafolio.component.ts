import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  proyectos: Proyecto[] = [
    { 
      id: 1,
      titulo: 'Sistema de Registro de Notas',
      descripcion: 'Aplicación para capturar, modificar y eliminar calificaciones de estudiantes mediante operaciones básicas en el DOM.',
      imagen: 'assets/proyectos/unidad1/notas.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 2,
      titulo: 'CRUD de Inventario Local',
      descripcion: 'Gestión de productos con inserción, búsqueda, actualización y eliminación, almacenados temporalmente en memoria.',
      imagen: 'assets/proyectos/unidad1/inventario.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 3,
      titulo: 'Calculadora Interactiva',
      descripcion: 'Herramienta básica para ejecutar operaciones aritméticas manipulando elementos del DOM con JavaScript.',
      imagen: 'assets/proyectos/unidad1/calculadora.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  modalOpen = false;
  selected: Proyecto | null = null;

  openModal(p: Proyecto) {
    this.selected = p;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selected = null;
  }

  volver() {
    console.log('Volver no tiene funcionalidad requerida. Reemplazable con navegación futura.');
  }

  siguiente() {
    console.log('Navegación futura si se requiere modulo.');
  }

}

