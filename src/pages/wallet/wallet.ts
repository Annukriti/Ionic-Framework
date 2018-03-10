import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

   constructor(public atrCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }
history1() {
    let alert = this.atrCtrl.create({
      title: 'Info!',
      subTitle: 'No Activity for the selected month',
      buttons: ['OK']
    });
    alert.present();
  }
    
}
