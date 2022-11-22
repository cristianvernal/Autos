import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

nombreUsuario: string;

  constructor( private data: DbService) { }

  ngOnInit() {

    this.data.disparador.subscribe(data=>{
      console.log(data)
      this.nombreUsuario = data
    })
  }



}
