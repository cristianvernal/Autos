import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar-viaje',
  templateUrl: './ingresar-viaje.page.html',
  styleUrls: ['./ingresar-viaje.page.scss'],
})
export class IngresarViajePage implements OnInit {

  viaje: FormGroup;

  constructor(private pickerCtrl: PickerController, public FormBuilder: FormBuilder, private dbservice: DbService, private alertCtrl: AlertController) {
    this.viaje = this.FormBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      patente:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      modelo:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      destino:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      time: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      asiento:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)

      ])),   
      dinero: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   

    })
   }

  ngOnInit() {
  }
  

 async ingresarViaje(){
   var v = this.viaje.value;
    
    if(this.viaje.invalid){

      const alert = await this.alertCtrl.create({
        header: 'Incompleto',
        message: 'Faltan datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }else{
      const alerta = await this.alertCtrl.create({
        header: 'Exito',
        message: 'viaje Registrado',
        buttons: ['Aceptar']
      });
      await alerta.present();
    }
   
   var viaje = {
    name: v.name,
    patente: v.patente,
    modelo: v.modelo,
    destino: v.destino,
    time: v.time,
    dinero: v.dinero
   }
   localStorage.setItem('viaje',JSON.stringify(viaje));
}
}

