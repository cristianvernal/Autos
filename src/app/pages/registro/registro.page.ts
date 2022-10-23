import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: FormGroup;
  constructor(private FormBuilder: FormBuilder, private alertController: AlertController,  public toatsCrtl: ToastController, public navCtrl: NavController ) { 
    
    
    this.datos = this.FormBuilder.group ({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]))
    })
  }
  
  ngOnInit() {
  }

  async registroNuevo(){
    var dato = this.datos.value;

    //this.router.navigate(['/home']);

    if(this.datos.invalid){
      //this.router.navigate(['/registro']);
      const alert = await this.alertController.create({
        header: 'faltan datos',
        message: 'debes ingresar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }else{
      this.navCtrl.navigateRoot('home');
    }

    var usuario = {
      
      email: dato.email,
      password: dato.password,

    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}


  
  


    

  

