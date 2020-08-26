import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowsComponent } from './rows/rows.component';
import { ExtendComponent } from './extend/extend.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [RowsComponent, ExtendComponent, BannerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExtendComponent
  ]
})
export class MainPageModule { }
