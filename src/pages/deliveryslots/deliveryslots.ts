import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyvoucherPage } from '../applyvoucher/applyvoucher';
/**
 * Generated class for the DeliveryslotsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliveryslots',
  templateUrl: 'deliveryslots.html',
})
export class DeliveryslotsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryslotsPage');
  }
add3()
{
	this.navCtrl.push(ApplyvoucherPage);
}
}
