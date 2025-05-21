import { Component, OnInit, HostBinding, Input } from '@angular/core';
import Article from './app.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('class') cssClass = 'card';  // Assegna la classe CSS 'card' al componente

  @Input() article!: Article;  // Propietà in ingresso da un altro componente, 'article' non è mai nullo

  constructor() {
    // Non è necessario inizializzare l'articolo qui, dato che è popolato tramite @Input()
  }

  voteUp(): void {
    this.article.voteUp();
  }

  voteDown(): void {
    this.article.voteDown();
  }

  ngOnInit(): void {
    // Questo metodo è vuoto per ora, ma può essere utilizzato per inizializzare logica aggiuntiva
  }
}