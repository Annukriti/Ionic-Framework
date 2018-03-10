import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order1Page } from '../order1/order1';

/**
 * Generated class for the Order2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order2',
  templateUrl: 'order2.html',
})
export class Order2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order2Page');
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
