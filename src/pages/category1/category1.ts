import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category3Page } from '../category3/category3';
/**
 * Generated class for the Category1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category1',
  templateUrl: 'category1.html',
})
export class Category1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category1Page');
  }
category3()
{
	this.navCtrl.push(Category3Page);
}
}
