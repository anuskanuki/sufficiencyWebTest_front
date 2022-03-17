import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseService } from "../../aluno/services/base.service";
import { AccessTokenModel, LoginModel } from "../models/login.model";


@Injectable({
    providedIn: 'root'
})
export class LoginService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public novoUsuario(model: LoginModel): Observable<AccessTokenModel> {
        return this.http.post(this.UrlApiV1 + 'usuarios/novo-usuario', model, super.httpJsonOptions)
            .pipe(
                map(super.extractData),
                catchError(error => throwError(error.error.errors[0]))
            );
    }

    public entrar(model: LoginModel): Observable<AccessTokenModel> {
        return this.http.post(this.UrlApiV1 + 'usuarios/entrar', model, super.httpJsonOptions)
            .pipe(
                map(super.extractData),
                catchError(error => throwError(error.error.errors[0]))
            );
    }
}