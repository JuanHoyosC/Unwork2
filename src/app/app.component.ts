import { Component } from '@angular/core';
import { UserService } from './servicios/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.responsive.scss']
})
export class AppComponent {
  constructor(public user:UserService) { }
  login = false;
  most = true;
  ngOnInit() {
    this.verificar();
  }
  m = true;
  mostrar(){ 
    this.m = false;
  }
  cerrar(){
    this.user.agregarUser("","","","");
    this.login = false;
    this.most = true;
  }
  verificar(){
    if(this.user.obtenerNombre() != ""){
      this.login = true;
      this.most = false;
    }else{
      this.login = false;
      this.most =true;
    }
  }


}