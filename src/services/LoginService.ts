import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginService } from 'src/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';

@Injectable({
    'providedIn': 'root',
})
export class LoginService implements ILoginService {
    
    public apiUrl: string = Global.ApiUrl+"usuarios/login";

    constructor(private _http: HttpClient) {

    }
    
    login(dados: Login): Observable<Usuario> {
        if (!dados.email) throw new Error('O campo Email é obrigatório.');
        if (!dados.senha) throw new Error('O campo Senha é obrigatório.');

        return this._http.post<Usuario>(this.apiUrl, dados);
    }

}