import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar-viaje',
  templateUrl: './ingresar-viaje.page.html',
  styleUrls: ['./ingresar-viaje.page.scss'],
})
export class IngresarViajePage implements OnInit {

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }
  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'asientos',
          options: [
            {
              text: '1',
              value: 'uno',
            },
            {
              text: '2',
              value: 'dos',
            },
            {
              text: '3',
              value: 'tres',
            },
            {
              text: '4',
              value: 'cuatro',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
        },
        {
          text: 'Confirmar',
          handler: (value) => {
            window.alert(`has seleccionado: ${value.asientos.value}`);
          },
        },
      ],
    });

    await picker.present();
  }
}

