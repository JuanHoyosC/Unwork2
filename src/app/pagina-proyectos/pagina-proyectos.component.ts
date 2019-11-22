import { Component, OnInit } from '@angular/core';
import { GenerarProyectoService} from '../servicios/generar-proyecto.service';
@Component({
  selector: 'app-pagina-proyectos',
  templateUrl: './pagina-proyectos.component.html',
  styleUrls: ['./pagina-proyectos.component.scss']
})
export class PaginaProyectosComponent implements OnInit {
  proyectos = [];
  vector = [];
  constructor(public proyectoService: GenerarProyectoService) { }

  ngOnInit() {
    this.obtenerProyecto();
  }


  obtenerProyecto(){
    this.proyectoService.obtenerProyecto().snapshotChanges().subscribe(item => {
      this.proyectos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.proyectos.push(x);
      })
      for (let i = 0; i < this.proyectos.length; i++) {
        this.vector.push(Object.values(this.proyectos[i].categorias));
      }
    });
    
  }


}
