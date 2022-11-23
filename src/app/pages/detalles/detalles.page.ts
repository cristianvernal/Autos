import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViajesPage } from '../viajes/viajes.page';
import { ViajesPageModule } from '../viajes/viajes.module';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  cosa = null;

  constructor(private activateRoute: ActivatedRoute) { 

    this.activateRoute.queryParams.subscribe(params => {
      this.cosa = JSON.parse(params.viajes);
    });
  }

  ngOnInit() {
  }

}
