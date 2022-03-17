import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
