import { Component } from '@angular/core';
import Article from './article/app.model';

@Component({
  selector: 'app-root',
  imports: [Article],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let t = title.value;
    let v= link.value;
    console.log(`Adding article title: `+t+ ` and link: `+ v);
    console.log(`Adding article title: `+title.value+ ` and link: `+ link.value);
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}