import { Component, OnInit } from '@angular/core';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';

declare var bootstrap: any;

@Component({
  selector: 'app-unidad1',
  templateUrl: './unidad1.component.html',
  styleUrls: ['./unidad1.component.css']
})
export class Unidad1Component implements OnInit {

  peliculas: Pelicula[] = [];
  filtradas: Pelicula[] = [];
  generos: string[] = [];
  anios: number[] = [];
  peliculaActual: any = null;
  comentarios: any = {};

  movieModal: any;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculas = this.peliculasService.getPeliculas();
    this.filtradas = this.peliculas;
    this.llenarFiltros();
  }

  mostrarModal(p: Pelicula) {
    this.peliculaActual = p;
    if (!this.movieModal) {
      this.movieModal = new bootstrap.Modal(document.getElementById("movieModal"));
    }
    this.movieModal.show();
  }

  // Comentarios
  agregarComentario(texto: string, rating: number) {
    if (!texto.trim()) return;

    if (!this.comentarios[this.peliculaActual.titulo]) {
      this.comentarios[this.peliculaActual.titulo] = [];
    }

    this.comentarios[this.peliculaActual.titulo].push({ texto, rating });
  }

  obtenerComentariosActuales() {
    return this.comentarios[this.peliculaActual?.titulo] || [];
  }

  // Filtros
  llenarFiltros() {
    this.generos = [...new Set(this.peliculas.map(p => p.genero))];
    this.anios = [...new Set(this.peliculas.map(p => p.anio))];
  }

  filtrar(texto: string, genero: string, anio: string) {
    this.filtradas = this.peliculas.filter(p => {
      return (
        p.titulo.toLowerCase().includes(texto.toLowerCase()) &&
        (genero === "" || p.genero === genero) &&
        (anio === "" || p.anio.toString() === anio)
      );
    });
  }

  limpiarFiltros(input: any, g: any, a: any) {
    input.value = "";
    g.value = "";
    a.value = "";
    this.filtradas = this.peliculas;
  }
}

