import { Observable } from 'rxjs';
import { ILoginService } from 'src/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';

export class LoginService implements ILoginService {
    login(dados: Login): Observable<Usuario> {
        if (!dados.email) throw new Error('O campo Email é obrigatório.');
        if (!dados.senha) throw new Error('O campo Senha é obrigatório.');

        throw new Error('O login poderá ser efetuado.');
    }

}