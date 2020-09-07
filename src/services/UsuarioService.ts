import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    'providedIn': 'root'
})
export class UsuarioService implements IUsuarioService {
    constructor (private _httpClient: HttpClient) {
       
    }
    cadastrar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    logar(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
    retornarUsuarioLogado(): Usuario {
        throw new Error("Method not implemented.");
    }

}