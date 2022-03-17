import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.less']
})
export class AlunoFormComponent implements OnInit {

  // FORM
  public form!: FormGroup;
  public submitted: boolean = false;
  @Output() refreshList = new EventEmitter();

  constructor(
    private alunoService: AlunoService,
    private formBuilder: FormBuilder,
    public router: Router,
    private notification: NzNotificationService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  public submit() {
    this.submitted = true;
    if (this.form.valid && this.form.dirty) {
      this.alunoService.insert(this.form.value).subscribe(
        () => this.savingSuccess('Aluno inserido com sucesso!'),
        error => {
          console.log(error)
          this.notification.error('Oops!', error);
        }
      );
    }
  }

  private savingSuccess(message: string) {
    this.form.reset();
    this.notification.success('Sucesso!', message);
    this.refreshList.emit()
    setTimeout(() => this.router.navigate(['aluno']), 500);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
    });
  }

}