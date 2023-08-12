import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../_models/employee';
const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(`${baseUrl}/user`).pipe(
      map((res: any) => res.data)
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get(`${baseUrl}/user`).pipe(
      map((res: any) => res.data.find((a: any) => a.id === id))
    );
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${baseUrl}/user`, employee);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(`${baseUrl}/user`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }
}
