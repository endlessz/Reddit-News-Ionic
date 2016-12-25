import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any
  category: string
  limit: number

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.category = 'gaming'
    this.limit = 10
  }

  ngOnInit(){
  	this.getPosts(this.category, this.limit)
  }

  getPosts(category, limit){
  	this.redditService.getPosts(category, limit).subscribe(response => {
  		this.posts = response.data.children
  	})
  }

  viewPost(post){
    console.log(post)

    this.navCtrl.push(PostPage, {
       post: post
    })
  }

  changeCategory(){
    this.getPosts(this.category, this.limit)
  }
}
