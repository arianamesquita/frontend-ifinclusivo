import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/internal/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  endpoint = "";

  constructor( private readonly httpService: HttpService ) { }

  getContatos() {
    return this.httpService
      .genericGet(`${this.endpoint}`)
      .pipe((res) => {
        console.log(res);
        return res;
      })
  }
}
