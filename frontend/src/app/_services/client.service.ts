import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ORG_USER_TYPE_ADMIN } from '../contants';
import { Client } from '../_models/client';
const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get(`${baseUrl}/user?userType=${ORG_USER_TYPE_ADMIN}`).pipe(
      map((res: any) => res.data)
    );
  }
}
