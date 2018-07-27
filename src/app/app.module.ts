import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { AppRoutingModule } from './app-routing.module';
import { EstudiosComponent } from './estudios/estudios.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ConocimientosDetailComponent } from './conocimientos-detail/conocimientos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CoverpageComponent,
    EstudiosComponent,
    ConocimientosComponent,
    ProyectosComponent,
    ConocimientosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
