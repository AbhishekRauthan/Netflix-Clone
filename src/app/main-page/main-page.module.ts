import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowsComponent } from './rows/rows.component';
import { ExtendComponent } from './extend/extend.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [RowsComponent, ExtendComponent, BannerComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExtendComponent
  ]
})
export class MainPageModule { }
