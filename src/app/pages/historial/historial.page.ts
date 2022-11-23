import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  
  listaCosas: any = [{
    id: 1,
    name: 'Reñaca',
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-Picture.png',
    conductor: 'alvaro Reyes',
    patente: 'hvbn-45',
    hora: '22:13',
    destino: 'Reñaca',
    valor: '3000'

  },
  {
    id: 2,
    name: 'Valparaiso',
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-Picture.png',
    conductor: 'Ricardo Monsalve',
    patente: 'gthj-66',
    hora: '23:33',
    destino: 'valparaiso',
    valor: '2800'
  },
  {
    id: 3,
    name: 'Quilpue',
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-Picture.png',
    conductor: 'Alfonso Vernal',
    patente: 'drtj-88',
    hora: '20:20',
    destino: 'Quilpue',
    valor: '4500'
  },
  {
    id: 4,
    name: 'Reñaca Alto',
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-Picture.png',
    conductor: 'Sergio Rosipatron',
    patente: 'gmou-66',
    hora: '23:45',
    destino: 'Reñaca alto',
    valor: '3000'
  }
]
  constructor(public navCtrl:NavController) { }

  goToDetalles(cosa: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          viajes: JSON.stringify(cosa)
      }
    };
  this.navCtrl.navigateForward(['detalles/'], navigationExtras);
  };

  ngOnInit() {
    
  }
}
