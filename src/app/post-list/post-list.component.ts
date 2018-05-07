import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  postList: FirebaseListObservable<any[]>;
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postList = this.postService.getPosts();
  }

  goToDetailPage(clickedPost) {
   this.router.navigate(['posts', clickedPost.$key]);
 };
  addPost() {
    this.router.navigate(['add']);
  }

}
