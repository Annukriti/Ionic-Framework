import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category1Page } from '../category1/category1';
/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }
next()
{
	this.navCtrl.push(Category1Page);
}
}
