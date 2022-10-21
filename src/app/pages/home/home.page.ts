import { Component} from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 

  constructor(public loadingController: LoadingController, 
    private FormBuilder: FormBuilder, 
    private alertController: AlertController ) {}

  public form: FormGroup;

  modeloCorreo: string = '';
  modeloPassword: string = '';

 
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

  send(): any {
    console.log(this.form.value);
  }

 



  validarCredenciales() {
    console.log(this.modeloCorreo);
    console.log(this.modeloPassword);
  }

  

}
