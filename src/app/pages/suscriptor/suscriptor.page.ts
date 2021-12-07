import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-suscriptor',
  templateUrl: './suscriptor.page.html',
  styleUrls: ['./suscriptor.page.scss'],
})
export class SuscriptorPage implements OnInit {

  pageTitle: any = 'Suscriptor';
  editForm : FormGroup;
  id : any;

  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getSuscripcion(this.id).then(res => {
      this.editForm.setValue({
        nombre: res['nombre'],
        email: res['email']
      })
    })
  }

  get nombre(){
    return this.editForm.get('nombre')
  }
  get email(){
    return this.editForm.get('email')
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
    this.editForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      email: [
      '',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
      ]
    ],
    });
  }

  saveForm() {
    this.db.updateSuscripcion(this.id, this.editForm.value)
    .then((res) => {
      console.log(res)
      this.router.navigate(['/formulario']);
    });
  }

}
