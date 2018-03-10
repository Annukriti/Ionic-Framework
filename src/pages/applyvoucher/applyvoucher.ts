import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceorderPage } from '../placeorder/placeorder';
/**
 * Generated class for the ApplyvoucherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applyvoucher',
  templateUrl: 'applyvoucher.html',
})
export class ApplyvoucherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyvoucherPage');
  }
add4()
{

	this.navCtrl.push(PlaceorderPage);
}
}
