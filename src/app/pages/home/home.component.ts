import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public userNameByEmail?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userNameByEmail = this.authService.tokenDataDecoded.email?.split('@')[0];
  }

}
