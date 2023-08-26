import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiwperPageRoutingModule } from './siwper-routing.module';

import { SiwperPage } from './siwper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiwperPageRoutingModule
  ],
  declarations: [SiwperPage]
})
export class SiwperPageModule {}
