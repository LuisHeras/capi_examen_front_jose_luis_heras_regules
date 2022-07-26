import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',

})

export class UsuariosComponent implements OnInit{

    usuarios: any[] = [];
    constructor(
        private http: HttpClient,
        private usuariosService: UsuariosService){


    }

    ngOnInit() {
        // // var usuarios = [];
        this.usuariosService.getUsuarios().subscribe( (data: any)  => {
             this.usuarios = data.data;
             console.log(this.usuarios);
          })

        
        console.log(this.usuarios);
    }

}