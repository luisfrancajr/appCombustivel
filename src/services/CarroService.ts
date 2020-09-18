import { ICarroService } from 'src/interfaces/ICarroService';
import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';

export class CarroService implements ICarroService {
    cadastrar(carro: Carro): Observable<Carro> {
        throw new Error("Method not implemented.");
    }
    remover(carro_id: number): void {
        throw new Error("Method not implemented.");
    }
    editar(carro: Carro): Observable<Carro> {
        throw new Error("Method not implemented.");
    }
    listar(): Observable<Carro[]> {
        throw new Error("Method not implemented.");
    }
    buscar(carro_id: number): Observable<Carro> {
        throw new Error("Method not implemented.");
    }
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number {
        throw new Error("Method not implemented.");
    }

}