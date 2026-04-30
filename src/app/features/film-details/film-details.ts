import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { FilmService } from '../../core/services/film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails implements OnInit {
  private breadcrumbsService = inject(BreadcrumbsService);
  private filmService = inject(FilmService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      this.router.navigate(['/']);
      return;
    }

    const film = this.filmService.getById(id);

    if (!film) {
      this.router.navigate(['/']);
      return;
    }

    this.breadcrumbsService.set([{ label: 'Home', link: '/' }, { label: film.title }]);
  }
}
