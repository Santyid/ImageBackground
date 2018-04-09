import { HttpClient } from '@angular/common/http';
import { FondoService } from './fondo.service';

import { Fondo } from './fondo.interface';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = 'https://yesno.wtf/api';
  fondos: Observable<Fondo[]>;

  constructor(private fondo: FondoService) {
    this.fondos = fondo.getFondo();
  }

  changeImage() {
    this.fondos = this.fondo.getFondo();
  }
}
