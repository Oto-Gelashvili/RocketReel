import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails implements OnInit {
  breadcrumbsService = inject(BreadcrumbsService);
  film = {
    title: 'titanic',
  };

  ngOnInit() {
    this.breadcrumbsService.set([{ label: 'Home', link: '/' }, { label: this.film.title }]);
  }
}
