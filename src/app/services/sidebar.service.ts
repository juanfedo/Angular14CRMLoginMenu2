import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {
        titulo:'Users',
        url: 'usuarios',
        icono: 'fa fa-users'
      },
      {
        titulo:'Products',
        url: 'productos',
        icono: 'fa fa-cubes'
      },
      {
        titulo:'Clients',
        url: 'clientes',
        icono: 'fa fa-user-circle'
      }
    ]
  }]



}
