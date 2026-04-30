import { Injectable, signal } from '@angular/core';

export interface Breadcrumb {
  label: string;
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private _breadcrumbs = signal<Breadcrumb[]>([]);

  breadcrumbs = this._breadcrumbs.asReadonly();

  set(breadcrumbs: Breadcrumb[]) {
    this._breadcrumbs.set(breadcrumbs);
  }
}
