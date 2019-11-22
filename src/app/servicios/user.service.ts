import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  nombre = "";
  correo = "";
  contraseña = "";
  tipo = "";
  constructor() { }
  
  obtenerNombre(){
    return this.nombre;
  }

  obtenerCorreo(){
    return this.correo;
  }

  obtenerContraseña(){
    return this.contraseña;
  }

  obtenerTipo(){
    return this.tipo;
  }

  agregarUser(nombre, correo, contraseña, tipo) {
      this.nombre = nombre;
      this.correo = correo;
      this.contraseña = contraseña;
      this.tipo = tipo;
  }
}
