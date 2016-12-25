import { Component } from '@angular/core';
import { SettingService } from '../../app/services/setting.service';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  category: any
  limit: any

  constructor(public navCtrl: NavController, private settingService: SettingService) {
  	this.category = this.settingService.getCategory()
    this.limit = this.settingService.getLimit()
  }

  setDefault(){
  	this.settingService.setDefault(this.category, this.limit)

  	this.navCtrl.push(HomePage)
  }
}