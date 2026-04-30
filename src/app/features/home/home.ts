import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { FilmService } from '../../core/services/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  breadcrumbsService = inject(BreadcrumbsService);
  filmService = inject(FilmService);
  films = this.filmService.films;
  ngOnInit() {
    this.breadcrumbsService.set([{ label: 'Home' }]);
  }
}
