import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgModel, FormControl } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;
  email: String;

  constructor(public loadingController: LoadingController,
    private FormBuilder: FormBuilder,
    private alertController: AlertController,
    public navCtrl: NavController, private router: Router) {

    this.form = this.FormBuilder.group({
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

  async loginCliente() {
    var f = this.form.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario.email == f.email && usuario.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('Ingresado', 'true');
      this.navCtrl.navigateRoot('cuenta');


    }
    else {
      this.router.navigate(['/home']);
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos no coinciden',
        buttons: ['Aceptar']

      });

      await alert.present();
    }

  }
}
