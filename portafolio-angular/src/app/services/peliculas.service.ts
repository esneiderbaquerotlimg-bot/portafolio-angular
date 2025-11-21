import { Injectable } from '@angular/core';

export interface Pelicula {
  titulo: string;
  anio: number;
  genero: string;
  imagen: string;
  sinopsis: string;
  actores: string;
  resena: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas: Pelicula[] = [
    { titulo: "Mi Villano Favorito 4", anio: 2024, genero: "Infantil y Comedia", imagen: "assets/pelicula4.jpg", sinopsis: "Gru y su familia deben adoptar identidades falsas...", actores: "Steve Carell, Kristen Wiig, Will Ferrell, Sofía Vergara, Pierre Coffin", resena: "Minions 4 continúa las divertidas aventuras..." },
    { titulo: "Deadpool 3", anio: 2024, genero: "Acción y Comedia", imagen: "assets/pelicula6.jpg", sinopsis: "Lobezno se recupera de sus heridas...", actores: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Morena Baccarin", resena: "Deadpool 3 combina acción y humor irreverente..." },
    { titulo: "John Wick 4", anio: 2023, genero: "Acción y Suspenso", imagen: "assets/pelicula2.jpg", sinopsis: "John Wick es un legendario asesino retirado...", actores: "Keanu Reeves, Donnie Yen, Bill Skarsgård...", resena: "John Wick 4 eleva la acción a un nuevo nivel..." },
    { titulo: "Terrifier 2", anio: 2022, genero: "Terror y Slasher", imagen: "assets/pelicula1.jpg", sinopsis: "Art the Clown es resucitado...", actores: "David Howard Thornton, Lauren LaVera...", resena: "Terrifier 2 es una secuela de terror extremo..." },
    { titulo: "Dragon Ball Super: Super Hero", anio: 2022, genero: "Acción y Aventura", imagen: "assets/pelicula5.jpg", sinopsis: "La organización Red Ribbon Army se reforma...", actores: "Mario Castañeda, René García...", resena: "Dragon Ball Super: Super Hero continúa la saga..." },
    { titulo: "Chiquito Pero Peligros", anio: 2006, genero: "Comedia y Crimen", imagen: "assets/pelicula3.jpg", sinopsis: "Calvin Sims, un ladrón enano...", actores: "Marlon Wayans, Shawn Wayans, Kerry Washington...", resena: "Chiquito pero peligroso mezcla humor disparatado..." },
  ];

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }
}

