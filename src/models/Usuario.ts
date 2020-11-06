import { Carro } from './Carro';

export class Usuario {
    public id: number = null;
    public email: string = null;
    public nome: string = null;
    public senha: string = null;
    public confirmarSenha: string = null;
    public carros: Carro[] = new Array<Carro>();
}