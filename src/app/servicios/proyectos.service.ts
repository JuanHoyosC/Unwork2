import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyectos: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  obtenerProyecto() {
    return this.proyectos = this.firebase.list('proyectos');
  }

  agregarProyecto(nombre, descripcion, ubicacion, categorias, precio, plazo, dueño) {
    this.proyectos.push({
      nombre:nombre,
      descripcion:descripcion,
      ubicacion:ubicacion,
      categorias:categorias,
      precio:precio,
      plazo:plazo,
      dueño:dueño
    });
  }
}
