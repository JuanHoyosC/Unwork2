import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { FiltroComponent } from './filtro/filtro.component';
import { PaginaProyectosComponent } from './pagina-proyectos/pagina-proyectos.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { GenerarProyectoComponent } from './generar-proyecto/generar-proyecto.component';
import { GenerarFreelancerComponent } from './generar-freelancer/generar-freelancer.component';
import {FormsModule} from '@angular/forms';
//Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {firebase} from '../environments/firebase';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LandingComponent,
    FooterComponent,
    SectionComponent,
    LoginComponent,
    RegistrarseComponent,
    FiltroComponent,
    PaginaProyectosComponent,
    FreelancerComponent,
    GenerarProyectoComponent,
    GenerarFreelancerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
