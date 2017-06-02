import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermometroComponent } from './termometro';

@NgModule({
  declarations: [
    TermometroComponent,
  ],
  imports: [
    IonicPageModule.forChild(TermometroComponent),
  ],
  exports: [
    TermometroComponent
  ]
})
export class TermometroComponentModule {}
