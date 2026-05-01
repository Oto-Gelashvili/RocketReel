import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../../features/models/film.model';

@Component({
  selector: 'app-film-card',
  standalone: true,
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  @Input() film!: Film;

  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() open = new EventEmitter<number>();

  onToggleFavorite(event: Event) {
    event.stopPropagation();
    this.toggleFavorite.emit(this.film.id);
  }

  onOpen() {
    this.open.emit(this.film.id);
  }
}
