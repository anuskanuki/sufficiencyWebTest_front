import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../login/services/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private tokenService: AuthService,
        private notification: NzNotificationService
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.tokenService.token
            }
        });
        return next.handle(req).pipe(
            catchError(erro => {
                if (erro instanceof HttpErrorResponse) {
                    switch (erro.status) {
                        case 400:
                            console.log(erro);
                            break;

                        case 401:
                            this.tokenService.logout();
                            this.notification.error('Ops!', 'Requisição não autorizada');
                            break;

                        case 403:
                            this.notification.error('Ops!', 'Requisição não autorizada');
                            break;

                        case 404:
                            this.notification.error('Ops!', 'Página não encontrada');
                            break;

                        case 500:
                            console.log('Ops!', 'Erro interno de servidor!')
                            this.notification.error('Ops!', 'Erro interno de servidor!');
                            break;

                        case 0:
                            this.tokenService.logout();
                            break;

                        default:
                            console.log(erro);
                            break;
                    }
                }
                return throwError(erro);
            })
        );
    }
}