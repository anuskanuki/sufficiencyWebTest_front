import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno-routing.module';

import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [AlunoComponent, AlunoFormComponent, AlunoListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlunoRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzListModule,
    NzInputModule,
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzLayoutModule,
    NzNotificationModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
