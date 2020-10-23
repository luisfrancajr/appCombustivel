import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';
@Injectable({
    'providedIn': 'root'
})
export class UsuarioService implements IUsuarioService {
    
    public apiUrl: string = Global.ApiUrl+"usuarios";

    constructor (private _httpClient: HttpClient) {
       
    }
    cadastrar(usuario: Usuario): Observable<Usuario> {
        // valores falsos: 0, null, undefined, ""
        if (!usuario.nome) throw new Error('O campo Nome é obrigatório.');
        if (!usuario.email) throw new Error('O campo Email é obrigatório.');
        if (!usuario.senha) throw new Error('O campo Senha é obrigatório.');
        if (usuario.senha != usuario.confirmarSenha) throw new Error('As senhas não coincidem.');
        throw new Error("Já pode salvar.");
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    logar(usuario: Usuario): void {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
    retornarUsuarioLogado(): Usuario {
        let usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario;
    }

}