import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private storage: Storage, private sqlite: SQLite) {

     }
}
