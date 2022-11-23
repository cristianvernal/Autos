import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: FormGroup;
  usuario = {

    name: ""
    
  }

  constructor(public FormBuilder: FormBuilder, public alertController: AlertController, public navCtrl: NavController, public router: Router, private data: DbService ) { 
    
    
    this.datos = this.FormBuilder.group ({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),   
      email: new FormControl('', Validators.compose([
        Validators.required,
       Validators.email,
        Validators.minLength(3),
        Validators.maxLength(200)

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


  onSubmit(){
    
    
  }

  

  async registrarNuevo(){
    var f = this.datos.value;
    

    

    if(this.datos.invalid){
      
      const alert = await this.alertController.create({
        header: 'Incompleto',
        message: 'Faltan datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }else{
      const alerta = await this.alertController.create({
        header: 'Exito',
        message: 'Usuario Registrado',
        buttons: ['Aceptar']
      });
      await alerta.present();
      this.navCtrl.navigateRoot('home');
    }

    var usuario = {
      name: f.name,
      email: f.email,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    
  }

}


  
  


    

  

