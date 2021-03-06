import { ICarroService } from 'src/interfaces/ICarroService';
import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from './UsuarioService';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CarroService implements ICarroService {

    public apiUrl: string = Global.ApiUrl+"carros";
    private _usuarioLogado: Usuario = new Usuario();
    public carros: Carro[] = [];

    constructor(private _usuarioService: UsuarioService, 
        private _http: HttpClient) {
        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();
    }

    cadastrar(carro: Carro): Observable<Carro> {
        if (!carro.modelo) throw new Error('O campo modelo é obrigatório');
        if (!carro.montadora) throw new Error('O campo montadora é obrigatório');
        if (!carro.consumoAlcool) throw new Error('O campo consumo álcool é obrigatório');
        if (!carro.consumoGasolina) throw new Error('O campo consumo gasolina é obrigatório');

        carro.usuario_id = this._usuarioLogado.id;
        console.log(carro);
        return this._http.post<Carro>(this.apiUrl, carro);
    }
    remover(carro_id: number): void {
        throw new Error("Method not implemented.");
    }
    editar(carro: Carro): Observable<Carro> {
        throw new Error("Method not implemented.");
    }

    listar(): Promise<Carro[]> {
        this.carros = [];
        const promise = new Promise<Carro[]>(async (resolve, reject) => {
            try { 
                // forma 1
                const usuario = await this._usuarioService.buscarUsuario().toPromise();
                this.carros = usuario.carros;
                resolve(usuario.carros);

                // forma 2
                // const usuario = this._usuarioService.buscarUsuario();
                // usuario.subscribe(res => {
                //     resolve(res.carros);
                // });

            } catch(e) {
               reject(e); 
            }
        });
        return promise;
    }
    buscar(carro_id: number): Observable<Carro> {
        throw new Error("Method not implemented.");
    }
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number {
        let resultado: number = 0;

        if (!carro) throw new Error('Escolha um carro.');
        if (!distancia) throw new Error('Preencha a distância.');

        let valorCombustivel: number = 0;

        if (tipoCombustivel == 1) {
            valorCombustivel = carro.consumoGasolina;
        } else {
            valorCombustivel = carro.consumoAlcool;
        } 

        resultado = distancia/valorCombustivel;

        resultado = parseFloat(resultado.toFixed(2));

        return resultado;
    }

}