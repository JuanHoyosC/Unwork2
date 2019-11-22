import { Component, OnInit } from '@angular/core';
//Form
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarios = [];
  negocios = [];
  con;
  cont;
  cor;
  session = false;
  mostrar = false;
  alert = false;
  contra = "";
  mod = 1;

  constructor(public usuariosService: UsuarioService, public negocioService: UsuarioService, 
    public user:UserService, public router: Router) { }

  ngOnInit() {
    this.obtenerN();
    this.obtenerU();
  }


  obtenerU() {
    this.usuariosService.obtenerUsuario().snapshotChanges().subscribe(item => {
      this.usuarios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.usuarios.push(x);
      })
    });
  }

  obtenerN() {
    this.usuariosService.obtenerNegocio().snapshotChanges().subscribe(item => {
      this.negocios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.negocios.push(x);
      })
    });
  }


  mostrarContra(form: NgForm) {
    if (this.mod % 2 == 0) {
      this.mostrar = false;
      this.mod++;
    } else {
      this.mostrar = true;
      this.contra = form.value.contraseña;
      this.mod++;
    }
  }

  ingresar(form: NgForm) {

    if (form.value.correo != "" && form.value.contraseña != "") {
      for (let i = 0; i < this.usuarios.length; i++) {

        if (this.usuarios[i].correo == form.value.correo && this.usuarios[i].contraseña == form.value.contraseña) {
          this.session = true;
          this.user.agregarUser(this.usuarios[i].nombre,this.usuarios[i].correo,this.usuarios[i].contraseña, "freelancer");
          this.router.navigate(['/proyectos']);

        }

      }

      for (let i = 0; i < this.negocios.length; i++) {
        console.log(this.negocios[i].correo)
        if (this.negocios[i].correo == form.value.correo && this.negocios[i].contraseña == form.value.contraseña) {
          this.session = true;
          this.user.agregarUser(this.negocios[i].nombre,this.negocios[i].correo,this.negocios[i].contraseña, "negocios");
          this.router.navigate(['/freelancer']);
        }
      }
      this.alert = false;
    } else {
      this.alert = true;
    }
  }

}
