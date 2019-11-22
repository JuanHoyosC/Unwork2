import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class GenerarFreelancerService {

  freelancers: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  obtenerFreelancer() {
    return this.freelancers = this.firebase.list('freelancers');
  }

  agregarFreelancer(nombre, descripcion, ubicacion, categorias, precio, foto) {
    this.freelancers.push({
      nombre:nombre,
      descripcion:descripcion,
      ubicacion:ubicacion,
      categorias:categorias,
      precio:precio,
      foto:foto,
    });
  }
}
