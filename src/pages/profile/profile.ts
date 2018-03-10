import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { Category1Page } from '../category1/category1';
import { MyorderPage } from '../myorder/myorder';
import { DeliveryaddPage } from '../deliveryadd/deliveryadd';
import { WalletPage } from '../wallet/wallet';
import { Order2Page } from '../order2/order2';
import { OffersPage } from '../offers/offers';
/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
}
password()
{
this.navCtrl.push(ChangepasswordPage);
}
order()
{
this.navCtrl.push(MyorderPage);
}
order12()
{
  this.navCtrl.push(Order2Page);
}
address()
{
  this.navCtrl.push(DeliveryaddPage);
}
wallet()
{
  this.navCtrl.push(WalletPage);
}
notify()
{
  this.navCtrl.push(OffersPage);
}
}
