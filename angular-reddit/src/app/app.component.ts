import { Component } from '@angular/core';
import Article from './article/app.model';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  imports: [ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles: any;
  addArticle(title: string, link: string): void {
    console.log(`Adding article title: ${title} and link: ${link}`);
    this.articles.push(new Article(title, link, 0));
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}