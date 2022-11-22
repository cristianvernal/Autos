import { Injectable, EventEmitter, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  @Output()disparador : EventEmitter<any> = new EventEmitter();

  constructor() {

     }
}
