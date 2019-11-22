import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss','./section.responsive.scss']
})
export class SectionComponent implements OnInit {

  constructor(public user:UserService) { }
  loginF = false;
  loginN = false;
  login2 = true;
  login3 = true;
  ngOnInit() {
    this.verificar();
  }

  verificar(){
    if(this.user.obtenerNombre() != ""){
      if(this.user.obtenerTipo() == "freelancer"){
        this.loginF = true;
        this.loginN = false;
        this.login2 = false;
        this.login3 = true;
      }else{
        this.loginF = false;
        this.loginN = true;
        this.login3 = false;
        this.login2 = true;
      }
    }else{
      this.login2 = true;
      this.login3 = true;
      this.loginF = false;
      this.loginN = false;
    }
  }

}
