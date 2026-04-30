import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  breadcrumbsService = inject(BreadcrumbsService);
  breadcrumbs = this.breadcrumbsService.breadcrumbs;
}
