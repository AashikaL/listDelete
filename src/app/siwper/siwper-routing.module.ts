import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiwperPage } from './siwper.page';

const routes: Routes = [
  {
    path: '',
    component: SiwperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiwperPageRoutingModule {}
