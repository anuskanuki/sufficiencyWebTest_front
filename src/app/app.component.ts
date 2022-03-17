import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './pages/login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  loginSuccess = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.acessaSistema();
  }

  public acessaSistema() {
    this.router.events.subscribe(rota => {
      if (rota instanceof NavigationEnd) {
        if (!rota.url.includes('login') && this.authService.usuarioLogado()) {
          this.loginSuccess = true;
        } else {
          this.loginSuccess = false;
          this.authService.cleanToken();
        }
      }
    });
  }

}
