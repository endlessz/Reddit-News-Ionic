import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { SettingService } from '../../app/services/setting.service';
import { NavController } from 'ionic-angular';
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts: any
  category: any
  limit: any

  constructor(public navCtrl: NavController, private redditService: RedditService, private settingService: SettingService) {
    this.category = this.settingService.getCategory()
    this.limit = this.settingService.getLimit()
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
