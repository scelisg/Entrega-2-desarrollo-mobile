import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pageTitle: any = '!Suscríbete!';
  mainForm: FormGroup;
  Data: any[] = [];

  constructor(
    private db:DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  get nombre(){
    return this.mainForm.get('nombre')
  }
  get email(){
    return this.mainForm.get('email')
  }


  public errorMessages= {
    nombre: [
      { tipo : 'obligatorio' , mensaje: 'El nombre es obligatorio' } ,  
      { tipo : 'maxlength' , mensaje: 'El nombre no puede tener más de 20 caracteres' } ,  
      { tipo : 'minlength' , mensaje: 'El nombre no puede tener menos de 3 caracteres' } 
    ] ,
    email: [
      { tipo : 'obligatorio' , mensaje: 'El email electrónico es obligatorio' } ,  
      { tipo : 'patrón' , mensaje: 'Ingrese una dirección de email electrónico válida' }  
    ] ,
  }

  ngOnInit() {
    this.db.dbState().subscribe((res => {
      if(res)
      {
        this.db.fetchFormulario().subscribe(item =>{
          this.Data = item
        })
      }
    }));
    this.mainForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      email: [
      '',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
      ]
    ],
    })
  }

  addFormulario(){
    this.db.addFormulario(
      this.mainForm.value.nombre,
      this.mainForm.value.email
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  deleteSuscripcion(id){
    this.db.deleteSuscripcion(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Suscripción eliminada',
        duration: 3000
      });
      toast.present()
    });
  }

  
}
