import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any

  constructor(public navCtrl: NavController, private redditService: RedditService) {
  }

  ngOnInit(){
  	this.getPosts('gaming', 10)
  }

  getPosts(category, limit){
  	this.redditService.getPosts(category, limit).subscribe(response => {
  		this.posts = response.data.children
  	})
  }
}
