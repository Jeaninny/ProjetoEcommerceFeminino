import { Produto } from "./Produto";

export class Sapato extends Produto {

    // Atributos específicos
    private _numeracao: number;

    // Método Construtor
    constructor(id: number,
        nome: string,
        tipo: number,
        preco: number,
        numeracao: number) {

        super(id, nome, tipo, preco);

        this._numeracao = numeracao;
    }

    // Métodos Getters e Setters
    public get numeracao(): number {
        return this._numeracao;
    }

    public set numeracao(value: number) {
        this._numeracao = value;
    }

    // Sobrescrevendo método Visualizar() da Super Classe
    public visualizar(): void {

        super.visualizar();

        console.log(`Numeração do Sapato: ${this._numeracao}`);
    }
}