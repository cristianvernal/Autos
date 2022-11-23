import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {
  
viaje = JSON.parse(localStorage.getItem('viaje'));
  
  constructor(private alertCtrl: AlertController){
  }
  
  ngOnInit(){
   
    
  }

  async unirse(){
    const alert = await this.alertCtrl.create({
      header: 'Exito',
      message: 'Viaje Seleccionado',
      buttons: ['OK'],
    });

    await alert.present();
  }

  }
  

