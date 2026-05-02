import { Component, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { FilmService } from '../../core/services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/film.model';
import { DurationPipe } from '../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.html',
  imports: [DurationPipe],
  styleUrl: './film-details.css',
})
export class FilmDetails implements OnInit {
  private breadcrumbsService = inject(BreadcrumbsService);
  private filmService = inject(FilmService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  film = signal<Film | null>(null);

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      this.router.navigate(['/']);
      return;
    }

    const foundFilm = this.filmService.getById(id);

    if (!foundFilm) {
      this.router.navigate(['/']);
      return;
    }

    this.film.set(foundFilm);

    this.breadcrumbsService.set([{ label: 'Home', link: '/' }, { label: foundFilm.title }]);
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
