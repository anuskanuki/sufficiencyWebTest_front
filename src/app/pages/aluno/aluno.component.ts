import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.less']
})
export class AlunoComponent implements OnInit {

  @Input()
  refreshList: unknown;

  constructor() { }

  ngOnInit(): void {
  }

}
