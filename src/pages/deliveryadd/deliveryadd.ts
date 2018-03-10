import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryaddressPage } from '../deliveryaddress/deliveryaddress';

/**
 * Generated class for the DeliveryaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliveryadd',
  templateUrl: 'deliveryadd.html',
})
export class DeliveryaddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryaddPage');
  }
add()
{
	this.navCtrl.push(DeliveryaddressPage);
}
}
