import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',

})

export class UsuariosComponent implements OnInit{

    usuarios: any[] = [];
    constructor(
        private http: HttpClient){

           

    }

    ngOnInit() {
        this.http.get('http://localhost:8080/capi_examen_back_Jose_Luis_Heras_Regules/public/getusuarios')
        .subscribe( data  => {
            //  this.usuarios = data;
            console.log(data)
        })
        console.log(this.usuarios);
    }

}