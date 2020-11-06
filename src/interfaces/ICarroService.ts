import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';

export interface ICarroService {
    cadastrar(carro: Carro) : Observable<Carro>;
    remover(carro_id: number) : void;
    editar(carro: Carro) : Observable<Carro>;
    listar() : Promise<Carro[]>;
    buscar(carro_id: number) : Observable<Carro>;
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number) : number;
}