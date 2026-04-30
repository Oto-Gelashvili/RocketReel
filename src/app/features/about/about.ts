import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  breadcrumbsService = inject(BreadcrumbsService);

  ngOnInit() {
    this.breadcrumbsService.set([{ label: 'About' }]);
  }
}
