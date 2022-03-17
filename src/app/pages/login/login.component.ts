import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginModel } from './models/login.model';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public formNovoCadastro!: FormGroup;
  public formJaTemCadastro!: FormGroup;
  public model?: LoginModel;
  public submitted: boolean = false;

  public selecinouQualLogin: boolean = false;
  public cadastroNovo: boolean = false;
  public jaTemCadastro: boolean = false;

  public loggedIn = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    public router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
  }

  createBasicNotification(title: string, content: string): void {
    this.notification
      .blank(
        title,
        content
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }

  ngOnInit(): void {
    this.selecinouQualLogin = false;
    this.cadastroNovo = false;
    this.jaTemCadastro = false;
  }


  public ehCadastroNovo() {
    this.selecinouQualLogin = true;
    this.cadastroNovo = true;
    this.jaTemCadastro = false;
    this.createFormNovoCadastro();
  }

  public ehJaTemCadastro() {
    this.selecinouQualLogin = true;
    this.jaTemCadastro = true;
    this.cadastroNovo = false;
    this.createFormJaTemCadastro();
  }

  public voltar() {
    this.selecinouQualLogin = false;
    this.jaTemCadastro = false;
    this.cadastroNovo = false;
  }

  public submit() {
    this.submitted = true;

    if (this.cadastroNovo) {
      this.submitCadastroNovo();
    }
    if (this.jaTemCadastro) {
      this.submitJaTemCadastro();
    }
  }

  private submitCadastroNovo() {
    if (this.formNovoCadastro.valid && this.formNovoCadastro.dirty) {
      this.loginService.novoUsuario(this.formNovoCadastro.value).subscribe(
        token => {
          console.log(token);
          if (token) {
            this.authService.setToken(token.accessToken);
            this.loginSuccess();
            this.formNovoCadastro.reset();
          }
        },
        error => {
          this.createBasicNotification('Oops! Reveja suas credenciais.', error);
        }
      );
    }
  }

  private submitJaTemCadastro() {
    if (this.formJaTemCadastro.valid && this.formJaTemCadastro.dirty) {
      this.loginService.entrar(this.formJaTemCadastro.value).subscribe(
        token => {
          if (token) {
            this.authService.setToken(token.accessToken);
            this.loginSuccess();
            this.formJaTemCadastro.reset();
          }
        },
        error => {
          this.createBasicNotification('Oops! Reveja suas credenciais.', error);
        }
      );
    }
  }

  private loginSuccess() {
    if (this.authService.usuarioLogado()) {
      this.notification.success('Jóia', "Autenticado com sucesso!");
      this.router.navigate(['/home']);
    } else {
      this.authService.cleanToken();
      this.notification.error('Ops!', "Erro ao autenticar, tente novamente.");
      this.router.navigate(['/login']);
    }
  }

  private createFormJaTemCadastro() {
    this.formJaTemCadastro = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  private createFormNovoCadastro() {
    this.formNovoCadastro = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }
}