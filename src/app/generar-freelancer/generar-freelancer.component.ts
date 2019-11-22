import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import { GenerarFreelancerService} from '../servicios/generar-freelancer.service';
import { Observable } from 'rxjs/internal/observable';
import {finalize} from 'rxjs/operators';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-generar-freelancer',
  templateUrl: './generar-freelancer.component.html',
  styleUrls: ['./generar-freelancer.component.scss']
})
export class GenerarFreelancerComponent implements OnInit {
  verSeleccion: string = '';
  opcionSeleccionado: string  = '';
  listaOp = [];
  nombre: string  = '';
  costo: string = '';
  descripcion: string = '';
  ubicacion: string = '';
  im: string = '';
  urlImage: Observable <string>;
  urlImage2: Observable <string>;
  alert = false;
  lo: string = '';


  constructor(public storage:AngularFireStorage, public freelancer: GenerarFreelancerService) { }

  ngOnInit() {
    this.freelancer.obtenerFreelancer();
  }

  onUpload(e){

    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const path = `uploads/profile_${id}`;
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path,  file);
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())
    ).subscribe();
    this.urlImage2 =  this.urlImage;
    }

  
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    if(this.listaOp.indexOf(this.verSeleccion) == -1 && this.verSeleccion != ''){
      this.listaOp.push(this.verSeleccion)
    }
  }

  guardarDatos(form: NgForm){
    console.log(this.lo)
    console.log(form.value.bn);
    if(this.nombre != "" && this.descripcion != "" && this.ubicacion != ""){
      this.freelancer.agregarFreelancer(this.nombre, this.descripcion, this.ubicacion, this.listaOp, this.costo, this.im)
      this.alert = false;
      form.reset();
    }else{
      this.alert = true;
    }
  }

}
