export class Post {
  date: Date;
  constructor(public title: string, public user: string, public body: string, public category: string) {
    this.date = new Date();
  }
}
