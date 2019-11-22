import { Component, OnInit } from '@angular/core';
//Form
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  op1 = true;
  op2 = false;
  nom;
  con;
  cor;
  cont2;
  ape;
  alert = false;
  constructor(public usuariosService: UsuarioService, public negocioService: UsuarioService, public user:UserService) { }

  ngOnInit() {
    this.usuariosService.obtenerUsuario();
    this.negocioService.obtenerNegocio();
  }


  //Agrega los datos a la base de datos
  onSubtmit(form: NgForm) {

    //Agrega nuevos usuarios

    if (this.op1 == true) {
      if (form.value.nombre != null && form.value.apellido != null && form.value.correo != null) {
        this.alert = false;
        this.usuariosService.agregarUsuario(form.value.nombre, form.value.apellido, form.value.correo, form.value.contraseña, form.value.nuevaContraseña);
        this.user.agregarUser(form.value.nombre,form.value.correo,form.value.contraseña, "freelancer");
      } else {
        this.alert = true;
      }
    } else {
      if (form.value.nombre != null != null && form.value.correo != null) {
        this.alert = false;
        this.negocioService.agregarNegocio(form.value.nombre, form.value.correo, form.value.contraseña, form.value.nuevaContraseña);
        this.user.agregarUser(form.value.nombre,form.value.correo,form.value.contraseña, "negocios");
      } else {
        this.alert = true;
      }
    }
    form.reset();

  }

  opcion(op) {
    console.log(op)
    if (op == 1) {
      this.op1 = true;
      this.op2 = false;
    } else {
      this.op2 = true;
      this.op1 = false;
    }
  }

}
