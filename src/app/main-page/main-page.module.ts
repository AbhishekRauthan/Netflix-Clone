import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowsComponent } from './rows/rows.component';
import { ExtendComponent } from './extend/extend.component';


@NgModule({
  declarations: [RowsComponent, ExtendComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExtendComponent
  ]
})
export class MainPageModule { }
