import { Colors } from "../src/util/Colors";
import { formatarMoeda } from "../src/util/Currency";

export abstract class Produto {

    // Atributos
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    // Construtor
    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

    // Métodos Getters e Setters

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get preco(): number {
        return this._preco;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    // Métodos específicos
    public visualizar(): void {
        let tipoProduto: string;

        switch (this._tipo) {
            case 1:
                tipoProduto = "Roupa";
                break;
            case 2:
                tipoProduto = "Sapato";
                break;
            case 3:
                tipoProduto = "Acessorio";
                break;
            default:
                tipoProduto = "Tipo Inválido";
        }

        console.log("\n");
        console.log(Colors.fg.red,
            "******************************",
            Colors.reset);
        console.log("         DADOS DO PRODUTO");
        console.log(Colors.fg.red,
            "******************************",
            Colors.reset);
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${this._tipo}`);
        console.log(`Preço: ${formatarMoeda(this._preco)}`);
    }
}