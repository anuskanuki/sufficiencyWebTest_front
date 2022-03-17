import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BaseService } from '../aluno/services/base.service';
import { UserModel } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public login(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.UrlApiV1 + 'entrar')
            .pipe(
                catchError(error => throwError(error.error.errors[0]))
            );
    }

    public insert(model: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(this.UrlApiV1 + 'postLogin', model, super.httpJsonOptions)
            .pipe(
                map(super.extractData),
                catchError(error => throwError(error.error.errors[0]))
            );
    }

}