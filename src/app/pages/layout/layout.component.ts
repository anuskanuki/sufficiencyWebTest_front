import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public sair() {
    this.authService.logout();
  }

}
