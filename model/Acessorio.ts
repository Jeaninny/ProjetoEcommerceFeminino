import { Produto } from "./Produto";

export class Acessorio extends Produto {

    // Atributos específicos
    private _modelo: string;

    // Método Construtor
    constructor(id: number,
        nome: string,
        tipo: number,
        preco: number,
        modelo: string) {

        super(id, nome, tipo, preco);

        this._modelo = modelo;
    }

    // Métodos Getters e Setters
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    // Sobrescrevendo método Visualizar() da Super Classe
    public visualizar(): void {

        super.visualizar();
        
        console.log(`Modelo do Acessório: ${this._modelo}`);
    }

}