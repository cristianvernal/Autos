import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  
 recover: FormGroup
  
  constructor(private alertController: AlertController, public formBuilder: FormBuilder, private router: Router) { 
   
    this.recover = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
       Validators.email,
        Validators.minLength(3),
        Validators.maxLength(200)

      ])),  
    })
  }
      ngOnInit() {
      }
      
      
      async presentAlert() {
        var f = this.recover.value;
    
        var usuario = JSON.parse(localStorage.getItem('usuario'));
    
        if (usuario.email == f.email ) {
          const alerta = await this.alertController.create({
            header: 'Exito',
            message: 'correo enviado',
            buttons: ['Aceptar']
          });
          await alerta.present();
          this.router.navigate(['/home']);
    
    
        }
        else {
          
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos no coinciden',
            buttons: ['Aceptar']
    
          });
    
          await alert.present();
        }
    
      }
  }

