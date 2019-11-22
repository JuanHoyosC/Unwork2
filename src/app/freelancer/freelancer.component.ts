import { Component, OnInit } from '@angular/core';
import { GenerarFreelancerService} from '../servicios/generar-freelancer.service';
@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  constructor(public freelancer: GenerarFreelancerService) { }
  freelancers = [];
  vector = [];
  ngOnInit() {
    this.obtenerFreelancer();
  }

  obtenerFreelancer(){
    this.freelancer.obtenerFreelancer().snapshotChanges().subscribe(item => {
      this.freelancers = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.freelancers.push(x);
      })
      for (let i = 0; i < this.freelancers.length; i++) {
        this.vector.push(Object.values(this.freelancers[i].categorias));
      }
    });
    
  }
}
