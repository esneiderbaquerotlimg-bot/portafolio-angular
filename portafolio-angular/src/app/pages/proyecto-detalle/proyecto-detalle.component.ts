import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent {
  proyecto: any = history.state.proyecto || null;

  constructor(private router: Router){
    // If user navigates direct without state, optionally fetch by id from URL.
    if(!this.proyecto){
      // fallback message
      this.proyecto = { titulo: 'Detalle no disponible', descripcion: 'No hay datos en el estado. Usa la vista de proyectos.' };
    }
  }

  volver(){ this.router.navigate(['/']); }
}





