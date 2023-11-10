import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `<h2>Nuevo Usuario</h2>`
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
  ) {
   this.router.params.subscribe( (params: any) => {
     console.log('Ruta jija nuevo usuario');
     console.log(params);
   })
  }
  ngOnInit() {}
}
