import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
    protected UrlApiV1 = environment.urlApiV1;
    // protected UrlApiJsonServer = 'http://localhost:3000/'; //mocks

    protected httpJsonOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    protected httpHeadersAuth = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    protected extractData(response: any) {
        return response || {};
    }
}
