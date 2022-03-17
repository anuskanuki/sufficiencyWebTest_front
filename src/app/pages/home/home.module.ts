import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
