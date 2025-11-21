import { Routes } from '@angular/router';

// Componentes existentes
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoDetalleComponent } from './pages/proyecto-detalle/proyecto-detalle.component';
import { ContactosComponent } from './pages/contacto/contacto.component';

// NUEVO componente (Unidad 1)
import { Unidad1Component } from './components/unidad1/unidad1.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto/:id', component: ProyectoDetalleComponent },
  { path: 'contacto', component: ContactosComponent },

  // NUEVA ruta para Unidad 1
  { path: 'unidad-1', component: Unidad1Component },

  // Ruta por defecto para errores o paths no definidos
  { path: '**', redirectTo: '' }
];


