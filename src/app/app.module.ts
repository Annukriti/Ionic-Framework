import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {ProfilePage} from '../pages/profile/profile';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { Category1Page } from '../pages/category1/category1';
import { MyorderPage } from '../pages/myorder/myorder';
import { DeliveryaddPage } from '../pages/deliveryadd/deliveryadd';
import { WalletPage } from '../pages/wallet/wallet';
import { DeliveryaddressPage } from '../pages/deliveryaddress/deliveryaddress';
import { DeliveryslotsPage } from '../pages/deliveryslots/deliveryslots';
import { ApplyvoucherPage } from '../pages/applyvoucher/applyvoucher';
import { PlaceorderPage } from '../pages/placeorder/placeorder';
import { Category3Page } from '../pages/category3/category3';
import { Checkout1Page } from '../pages/checkout1/checkout1';
import { Order1Page } from '../pages/order1/order1';
import { Order2Page } from '../pages/order2/order2';
import { OffersPage } from '../pages/offers/offers';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ChangepasswordPage,
    Category1Page,
    MyorderPage,
    DeliveryaddPage,
    WalletPage,
    DeliveryaddressPage,
    DeliveryslotsPage,
    ApplyvoucherPage,
    PlaceorderPage,
    Category3Page,
    Checkout1Page,
    Order1Page,
    Order2Page,
    OffersPage

  ],
  imports: [
  
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ChangepasswordPage,
    Category1Page,
    MyorderPage,
    DeliveryaddPage,
    WalletPage,
    DeliveryaddressPage,
    DeliveryslotsPage,
    ApplyvoucherPage,
    PlaceorderPage,
    Category3Page,
    Checkout1Page,
     Order1Page,
    Order2Page,
    OffersPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
