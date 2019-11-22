import { Component, OnInit } from '@angular/core';
import { GenerarProyectoService} from '../servicios/generar-proyecto.service';
@Component({
  selector: 'app-generar-proyecto',
  templateUrl: './generar-proyecto.component.html',
  styleUrls: ['./generar-proyecto.component.scss']
})
export class GenerarProyectoComponent implements OnInit {
  listaOp = [];
  alert = false;
  opcionSeleccionado: string  = '';
  nombre: string  = '';
  propietario: string  = '';
  plazo: string  = '';
  costo: string = '';
  descripcion: string = '';
  ubicacion: string = '';
  verSeleccion: string = '';
  constructor(public proyectoService: GenerarProyectoService) { }

  ngOnInit() {
    this.proyectoService.obtenerProyecto();
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    if(this.listaOp.indexOf(this.verSeleccion) == -1 && this.verSeleccion != ''){
      this.listaOp.push(this.verSeleccion)
    }
}

  

  guardarDatos(){
    if(this.nombre != "" && this.descripcion != "" && this.ubicacion != ""){
      this.proyectoService.agregarProyecto(this.nombre, this.descripcion, this.ubicacion, this.listaOp, this.costo,this.plazo, this.propietario);
      this.alert = false;
    }else{
      this.alert = true;
    }
  }

}
