import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceorderPage } from './placeorder';

@NgModule({
  declarations: [
    PlaceorderPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceorderPage),
  ],
})
export class PlaceorderPageModule {}
