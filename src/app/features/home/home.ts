import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  breadcrumbsService = inject(BreadcrumbsService);

  ngOnInit() {
    this.breadcrumbsService.set([{ label: 'Home' }]);
  }
}
