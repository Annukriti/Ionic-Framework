import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Order2Page } from '../order2/order2';
/**
 * Generated class for the Order1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order1',
  templateUrl: 'order1.html',
})
export class Order1Page {

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order1Page');
  }
orderSummary()
{
  this.navCtrl.push(Order1Page);
}
orderItem()
{
  this.navCtrl.push(Order2Page);
}
}
