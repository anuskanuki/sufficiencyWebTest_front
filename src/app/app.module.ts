import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoModule } from './pages/aluno/aluno.module';
import { HomeModule } from './pages/home/home.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { LayoutModule } from './pages/layout/layout.module';
import { AuthService } from './pages/login/services/auth.service';
import { AuthInterceptor } from './pages/aluno/services/auth.interceptor';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    AlunoModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    LayoutModule
  ],
  providers: [
    {
      provide: NZ_I18N, useValue: pt_BR
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
