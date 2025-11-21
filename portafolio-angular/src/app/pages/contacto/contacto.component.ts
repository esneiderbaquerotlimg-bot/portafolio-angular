import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactosComponent {

  form: any;
  sending = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviar(){
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;
    // Simula envío
    setTimeout(()=>{
      this.sending = false;
      alert('Mensaje Enviado Correctamente. Revisaré Tu Mensaje y Responderé Pronto.');
      this.form.reset();
    }, 1100);
  }

 volver(){ 
  this.router.navigate(['/proyectos']); 
}
}
