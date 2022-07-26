import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuariosService{

    constructor(private http: HttpClient){
        console.log("Servicio listo para usarse")
    }

    getUsuarios(){
      return this.http.get('http://localhost:8080/capi_examen_back_Jose_Luis_Heras_Regules/public/getusuarios');
    }
}