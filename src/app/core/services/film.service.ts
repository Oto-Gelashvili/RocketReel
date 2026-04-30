import { Injectable, signal, computed } from '@angular/core';
import { FILMS } from '../../../assets/data/films';
import { Film } from '../../features/models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _films = signal<Film[]>(FILMS);

  films = this._films.asReadonly();

  favoriteFilms = computed(() => this._films().filter((f) => f.isFavorite));

  getById(id: number): Film | undefined {
    return this._films().find((f) => f.id === id);
  }

  toggleFavorite(id: number): void {
    this._films.update((films) =>
      films.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }
}
