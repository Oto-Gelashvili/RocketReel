import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  author = 'Oto Gelashvili';
  githubUrl = 'https://github.com/Oto-Gelashvili';
}
