import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CoverpageComponent } from './coverpage/coverpage.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ConocimientosDetailComponent } from './conocimientos-detail/conocimientos-detail.component';

const routes: Routes = [
  { path: '', component: CoverpageComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'conocimientos', component: ConocimientosComponent,
    children: [
        { path: 'conocimientos/front-end/:name', component: ConocimientosDetailComponent },
        { path: 'conocimientos/back-end/:name', component: ConocimientosDetailComponent },
        { path: 'conocimientos/videojuegos/:name', component: ConocimientosDetailComponent }
    ]
  },
  { path: 'proyectos', component: ProyectosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}