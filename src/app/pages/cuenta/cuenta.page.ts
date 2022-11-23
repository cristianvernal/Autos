import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

nombreUsuario = JSON.parse(localStorage.getItem('usuario'))

  constructor( private data: DbService, public photoService: PhotoService) { }

  ngOnInit() {

    this.data.disparador.subscribe(data=>{
      console.log(data)
      this.nombreUsuario = data
    })
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
