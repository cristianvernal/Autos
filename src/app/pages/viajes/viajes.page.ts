import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;

constructor(private router: Router, private navCtrl: NavController){}
  
ionViewDidEnter(){
  this.createMap();
}

async createMap(){
  this.map = await GoogleMap.create({
    id: 'my_map',
    element: this.mapRef.nativeElement,
    apiKey: environment.apiKey,
    config:{
      center:{
        lat: 33.6,
        lng: -117.9
      },
      zoom: 8,
    }
  });
}

ngOnInit() {
  }

  ingresarViaje(){
    this.navCtrl.navigateRoot('ingresar-viaje');
  }

  buscarViaje(){
    this.router.navigate(['/buscar-viaje']);
  }

}
