import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-proyecto-cine',
  templateUrl: './proyecto-cine.component.html',
  styleUrls: ['./proyecto-cine.component.css']
})
export class ProyectoCineComponent implements OnInit {

  ngOnInit(): void {
    this.initCineApp();
  }

  initCineApp(): void {

    const peliculas = [
      { titulo: "Mi Villano Favorito 4", anio: 2024, genero: "Infantil y Comedia", imagen: "assets/cine/pelicula4.jpg", sinopsis: "...", actores: "...", resena: "..." },
      { titulo: "Deadpool 3", anio: 2024, genero: "Acción y Comedia", imagen: "assets/cine/pelicula6.jpg", sinopsis: "...", actores: "...", resena: "..." },
      { titulo: "John Wick 4", anio: 2023, genero: "Acción y Suspenso", imagen: "assets/cine/pelicula2.jpg", sinopsis: "...", actores: "...", resena: "..." },
      { titulo: "Terrifier 2", anio: 2022, genero: "Terror y Slasher", imagen: "assets/cine/pelicula1.jpg", sinopsis: "...", actores: "...", resena: "..." },
      { titulo: "Dragon Ball Super: Super Hero", anio: 2022, genero: "Acción y Aventura", imagen: "assets/cine/pelicula5.jpg", sinopsis: "...", actores: "...", resena: "..." },
      { titulo: "Chiquito Pero Peligros", anio: 2006, genero: "Comedia y Crimen", imagen: "assets/cine/pelicula3.jpg", sinopsis: "...", actores: "...", resena: "..." }
    ];

    let comentarios: any = {};
    let peliculaActual: any = null;

    const movieModal = new bootstrap.Modal(document.getElementById("movieModal"));
    const modalTitle = document.getElementById("modalTitle") as HTMLElement;
    const modalPoster = document.getElementById("modalPoster") as HTMLImageElement;
    const modalYear = document.getElementById("modalYear") as HTMLElement;
    const modalGenre = document.getElementById("modalGenre") as HTMLElement;
    const modalSynopsis = document.getElementById("modalSynopsis") as HTMLElement;
    const commentsList = document.getElementById("commentsList") as HTMLElement;
    const commentText = document.getElementById("commentText") as HTMLTextAreaElement;
    const commentRating = document.getElementById("commentRating") as HTMLSelectElement;
    const addCommentBtn = document.getElementById("addCommentBtn") as HTMLButtonElement;

    function mostrarPeliculas(lista: any[]) {
      const container = document.getElementById("moviesRow") as HTMLElement;
      container.innerHTML = "";

      if (lista.length === 0) {
        container.innerHTML = `<p class="text-muted">No se encontraron películas.</p>`;
        return;
      }

      lista.forEach(pelicula => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 col-12";
        col.innerHTML = `
        <div class="card h-100">
          <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
          <div class="card-body">
            <h5 class="card-title">${pelicula.titulo}</h5>
            <p><strong>Año:</strong> ${pelicula.anio}</p>
            <p><strong>Género:</strong> ${pelicula.genero}</p>
            <button class="btn btn-primary btn-sm mt-2">Ver detalles</button>
          </div>
        </div>`;
        col.querySelector("button")?.addEventListener("click", () => abrirModal(pelicula));
        container.appendChild(col);
      });
    }

    function abrirModal(pelicula: any) {
      peliculaActual = pelicula;
      modalTitle.textContent = pelicula.titulo;
      modalPoster.src = pelicula.imagen;
      modalYear.textContent = pelicula.anio;
      modalGenre.textContent = pelicula.genero;
      modalSynopsis.textContent = pelicula.sinopsis;
      mostrarComentarios();
      movieModal.show();
    }

    function mostrarComentarios() {
      commentsList.innerHTML = "";
      const lista = comentarios[peliculaActual.titulo] || [];
      if (lista.length === 0) {
        commentsList.innerHTML = "<p class='text-muted'>Aún no hay comentarios.</p>";
        return;
      }
      lista.forEach((c: any) => {
        const div = document.createElement("div");
        div.className = "border rounded p-2 mb-2";
        div.innerHTML = `<strong>${"★".repeat(c.rating)}</strong><p>${c.texto}</p>`;
        commentsList.appendChild(div);
      });
    }

    addCommentBtn.addEventListener("click", () => {
      const texto = commentText.value.trim();
      const rating = parseInt(commentRating.value);
      if (!texto) return alert("Escribe un comentario");
      if (!comentarios[peliculaActual.titulo]) comentarios[peliculaActual.titulo] = [];
      comentarios[peliculaActual.titulo].push({ texto, rating });
      commentText.value = "";
      mostrarComentarios();
    });

    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const genreSelect = document.getElementById("genreSelect") as HTMLSelectElement;
    const yearSelect = document.getElementById("yearSelect") as HTMLSelectElement;
    const clearFilters = document.getElementById("clearFilters") as HTMLButtonElement;

    function filtrar() {
      const texto = searchInput.value.toLowerCase();
      const genero = genreSelect.value;
      const anio = yearSelect.value;
      const filtradas = peliculas.filter(p =>
        p.titulo.toLowerCase().includes(texto) &&
        (genero === "" || p.genero === genero) &&
        (anio === "" || p.anio.toString() === anio)
      );
      mostrarPeliculas(filtradas);
    }

    searchInput.addEventListener("input", filtrar);
    genreSelect.addEventListener("change", filtrar);
    yearSelect.addEventListener("change", filtrar);
    clearFilters.addEventListener("click", () => {
      searchInput.value = "";
      genreSelect.value = "";
      yearSelect.value = "";
      mostrarPeliculas(peliculas);
    });

    mostrarPeliculas(peliculas);
  }
}
