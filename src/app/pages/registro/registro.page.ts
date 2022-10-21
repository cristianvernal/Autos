import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private FormBuilder: FormBuilder, private alertController: AlertController) { 
    // this.DbService.createDataBase().then(() =>{
    //   // tomara las personas
    //   this.getPersonas();
    // });  
  }
  public datos: FormGroup;
  personas: any = [];
  personaNombre: string = '';
  personaCorreo: string = '';
  personaContrasena: string = '';
  
  
  

  ngOnInit(): void{
      this.datos = this.FormBuilder.group({
        nombre: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
           
      });
  }

  send(): any{
    console.log(this.datos.value);
  }

    
  async registroCompleto() {
    const alert = await this.alertController.create({
      header: 'Registro Enviado',
      message: 'Se ha enviado un correo de confirmacion exitosamente.',
      buttons: ['OK'],
    });
    
    await alert.present();
  }
  
  // getPersonas(){
  //   this.dbservice.getPersona().then((data) =>{
  //     this.personas = [];
  //     if(data.rows.length > 0){
  //       for(var i = 0; i < data.rows.length; i++){
  //         this.personas.push(data.rows.item(i));
  //       }
  //     }
  //   });
  // }

  // addPersonaNombre(){
  //   if (!this.personaNombre.length){
  //     alert ('ingresar datos');
  //     return;
  //   }
    
  //   this.dbservice.addPersona(this.personaNombre, this.personaCorreo, this. personaContrasena).then((data)=>{
  //     this.personaNombre = '';
  //     alert(data);
  //     this.getPersonas();
  //   });
    
  // }

}
