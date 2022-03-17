import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AlunoModel } from '../models/aluno.model';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root'
})
export class AlunoService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public getAll(): Observable<AlunoModel[]> {
        return this.http.get<AlunoModel[]>(this.UrlApiV1 + 'alunos')
            .pipe(
                catchError(error => throwError(error.error.errors[0]))
            );
    }

    public insert(model: AlunoModel): Observable<AlunoModel> {
        model.id = undefined;

        return this.http.post<AlunoModel>(this.UrlApiV1 + 'alunos', model, super.httpJsonOptions)
            .pipe(
                map(super.extractData),
                catchError(error => throwError(error.error.errors[0]))
            );
    }

}