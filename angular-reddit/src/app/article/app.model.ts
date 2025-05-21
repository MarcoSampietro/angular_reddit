export default class Article {
    title: string;
    link: string;
    votes: number;
  
    constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
    }
  
    voteUp(): void {
      this.votes += 1;
    }
  
    voteDown(): void {
      this.votes -= 1;
    }
  
    // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(): string | null {
        try {
          const url = new URL(this.link);
          return url.hostname; // e.g. "foo.com"
        } catch (error) {
          console.error('Invalid URL:', this.link);
          return null;
        }
      }      
}