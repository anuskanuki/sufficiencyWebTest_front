import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzLayoutModule,
    NzSpaceModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
