import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { FilmService } from '../../core/services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  breadcrumbsService = inject(BreadcrumbsService);
  filmService = inject(FilmService);
  films = this.filmService.films;
  private router = inject(Router);

  ngOnInit() {
    this.breadcrumbsService.set([{ label: 'Home' }]);
  }
  toggleFavorite(id: number) {
    this.filmService.toggleFavorite(id);
  }

  openDetails(id: number) {
    this.router.navigate(['/films', id]);
  }
}
