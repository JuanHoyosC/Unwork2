import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: AngularFireList<any>;
  negocios: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  obtenerUsuario() {
    return this.usuarios = this.firebase.list('usuarios');
  }

  obtenerNegocio() {
    return this.negocios = this.firebase.list('negocios');
  }

  agregarUsuario(nombre, apellido, correo, contraseña, nuevaContraseña) {
    this.usuarios.push({
      nombre:nombre,
      apellido:apellido,
      correo:correo,
      contraseña:contraseña,
      nuevaContraseña:nuevaContraseña
    });
  }

  agregarNegocio(nombre, correo, contraseña, nuevaContraseña) {
    this.negocios.push({
      nombre:nombre,
      correo:correo,
      contraseña:contraseña,
      nuevaContraseña:nuevaContraseña
    });
  }
}
