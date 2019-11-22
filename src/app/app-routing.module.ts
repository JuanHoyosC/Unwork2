import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PaginaProyectosComponent } from './pagina-proyectos/pagina-proyectos.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { GenerarProyectoComponent } from './generar-proyecto/generar-proyecto.component';
import { GenerarFreelancerComponent } from './generar-freelancer/generar-freelancer.component';

const routes: Routes = [
    {path: 'home', component: LandingComponent},
    {path: 'login', component: LoginComponent },
    {path: 'registrarse', component: RegistrarseComponent },
    {path: 'proyectos', component: PaginaProyectosComponent },
    {path: 'freelancer', component: FreelancerComponent },
    {path: 'generarProyecto', component: GenerarProyectoComponent },
    {path: 'generarFreelancer', component: GenerarFreelancerComponent },
    {path: '**', pathMatch: 'full', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes);