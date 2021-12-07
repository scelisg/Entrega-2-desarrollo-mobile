import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Formulario } from "./formulario";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject
  formularioList = new BehaviorSubject ([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient, 
    private sqlPorter: SQLitePorter,

  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'formulario_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getFakeData();
      });
    });
  }

  dbState(){
    return this.isDbReady.asObservable();
  }

  fetchFormulario() : Observable<Formulario[]> {
    return this.formularioList.asObservable();
  }

  getFakeData() {
    this.httpClient.get(
      'assets/script.sql',{responseType: 'text'})
      .subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage,data)
        .then(_ => {
          this.getFormulario();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
      });
  }


  //CRUD

  //obtener lista de suscripciones

  getFormulario(){
    return this.storage.executeSql('SELECT * FROM formulario',[]).then(res => {
      let items: Formulario[] = [];
      if(res.rows.length > 0)
      {
        for(var i=0; i < res.rows.length; i++)
        {
          items.push({
            id:res.rows.item(i).id,
            nombre:res.rows.item(i).nombre,
            email:res.rows.item(i).email,
          });
        }
      }
      this.formularioList.next(items);
    });
  }

   //agregar objetos a la bd
   addFormulario(nombre, email){
    let data =[nombre, email];
    return this.storage.executeSql('INSERT INTO formulario (NOMBRE, EMAIL) VALUES (?,?)',data)
    .then(res => {
      this.getFormulario();
    });
  }

  //obtener una suscripción
  getSuscripcion(id): Promise<Formulario> {
    return this.storage.executeSql('SELECT * FROM formulario WHERE ID = ?',[id])
    .then(res => {
      return {
        id: res.rows.item(0).id,
        nombre: res.rows.item(0).nombre,
        email: res.rows.item(0).email,
      }
    });
  }

  //actualizar
  updateSuscripcion(id, formulario:Formulario){
    let data = [formulario.nombre, formulario.email];
    return this.storage.executeSql(`UPDATE formulario SET nombre = ?, email = ? WHERE id = ${id}`,data)
    .then(_ => {
      this.getFormulario();
    });
  }

  //eliminar
  deleteSuscripcion(id) {
    return this.storage.executeSql('DELETE FROM formulario WHERE id=?',[id])
    .then(_ => {
      this.getFormulario()
    });
  }


}

