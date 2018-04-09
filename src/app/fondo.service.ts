import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Fondo } from './fondo.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class FondoService {


  urlPost = 'https://yesno.wtf/api';

  constructor(private htpp: HttpClient) { }

  getFondo() {
    return this.htpp.get<Fondo[]>(this.urlPost);

  }

}
