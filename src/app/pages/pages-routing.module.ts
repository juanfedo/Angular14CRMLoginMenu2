import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VigilanteGuard } from '../auth/vigilant/vigilante.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent, canActivate: [VigilanteGuard],
  children:[
    { path: '', component: DashboardComponent, data:{titulo:'Dashboard'} },
    { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' } },
    { path: 'productos', component: ProductosComponent, data: { titulo: 'Productos' } },
    { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },
  ]
 },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: [VigilanteGuard]
})
export class PagesRoutingModule { }
