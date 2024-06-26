import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiUrl: string = "";

  constructor( private readonly http: HttpClient ) { }

  genericGet<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url)
      .pipe(map((response: T) => response ));
  }

  genericGetWithId<T>(endpoint: string, id?: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.get<T>(url)
      .pipe(map((response: T) => response));
  }

  genericPost<T>(endpoint: string, data: any, headers: any): Observable<T>{
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, data, httpOptions)
      .pipe(map((response: T) => response));
  }

  genericPut<T>(endpoint: string, data: any, id?: string): Observable<T> {
    const url = id ? `${this.apiUrl}/${endpoint}/${id}` : `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, data)
      .pipe(map((response: T) => response));
  }

  genericDelete<T>(endpoint: string, id?: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.delete<T>(url)
      .pipe(map((response: T) => response));
  }

}
