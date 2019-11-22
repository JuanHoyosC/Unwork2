import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public user:UserService) { }
  login = false;
  ngOnInit() {
    this.verificar();
  }

  verificar(){
    if(this.user.obtenerNombre() != ""){
      this.login = true;
    }else{
      this.login = false;
      console.log("d")
    }
  }
}
