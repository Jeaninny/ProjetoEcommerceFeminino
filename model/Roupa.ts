import { Produto } from "./Produto";

export class Roupa extends Produto {

    // Atributos específicos

    private _tamanho: string;
    private _tecido: string;
    private _peca: string;

    // Método Construtor

    constructor(id: number,
        nome: string,
        tipo: number,
        preco: number,
        tamanho: string,
        tecido: string,
        peca: string) {

        super(id, nome, tipo, preco);

        this._tamanho = tamanho;
        this._tecido = tecido;
        this._peca = peca;
    }

    // Métodos Getters e Setters

    public get tamanho(): string {
        return this._tamanho;
    }

    public get tecido(): string {
        return this._tecido;
    }

    public get peca(): string {
        return this._peca;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public set tecido(value: string) {
        this._tecido = value;
    }

    public set peca(value: string) {
        this._peca = value;
    }

    // Sobrescrevendo método Visualizar() da Super Classe
    public visualizar(): void {

        super.visualizar();

        console.log(`Tamanho da Roupa: ${this._tamanho}`);
        console.log(`Tecido da Roupa: ${this._tecido}`);
        console.log(`Peca de Roupa: ${this._peca}`);
    }
}