import { Component, Injector, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AlunoModel } from '../models/aluno.model';
import { TableHeaderConfig } from '../models/tabela.interface';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.less']
})
export class AlunoListComponent implements OnInit {

  // TABLE
  public tableRows: AlunoModel[] = [];

  constructor(
    protected servicoAluno: AlunoService,
    protected injector: Injector,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
    this.loadTable();
  }

  public loadTable() {
    this.servicoAluno.getAll().subscribe(
      response => {
        if (response.length) {
          this.tableRows = response;
        } else {
          this.tableRows = [];
        }
      },
      error => {
        this.notification.error('Oops!', error);
      }
    )
  }

  listOfColumn: Array<TableHeaderConfig> = [
    {
      title: 'ID',
      align: 'center',
      width: '80px',
    },
    {
      title: 'Nome',
      align: 'left',
    },
    {
      title: 'Telefone',
      align: 'left',
    }
  ];

}
