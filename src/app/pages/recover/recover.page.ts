import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  
 
  
  constructor(private alertController: AlertController) { 
   
    
  }
      ngOnInit() {
      }
      
      async presentAlert() {
        const alert = await this.alertController.create({
          header: 'Correo Enviado',
          message: 'Se ha enviado un correo de recuperacion exitosamente.',
          buttons: ['OK'],
        });
    
        await alert.present();
      }
      
  }

