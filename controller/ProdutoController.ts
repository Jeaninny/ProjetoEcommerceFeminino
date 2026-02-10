import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Colors } from "../src/util/Colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos = new Array<Produto>;
    private _numero: number = 0;


    // Implementação dos Métodos
    consultarPorId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log(Colors.fg.red,
                `\nO produto de ID: ${id} não foi encontrado!`,
                Colors.reset);
        }
    }

    listarProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(Colors.fg.green,
            `\nO produto ${produto.id} foi cadastrado com sucesso!`,
            Colors.reset);
    }

    atualizarProduto(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(Colors.fg.green,
                `\nO produto de ID ${produto.id} foi atualizado com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red,
                `\nO produto de ID ${produto.id} não foi encontrado! `, Colors.reset);
        }

    }

    deletarProduto(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(Colors.fg.green,
                `\nO produto de ID: ${id} foi deletado com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red,
                `\nO produto de ID ${id} não foi encontrado! `, Colors.reset);
        }
    }

    procurarPorNomeProduto(nome: string): void {

        // Filtragem dos dados
        const buscaProdutoPorNome = this.listaProdutos.filter(produto =>
            produto.nome.toUpperCase().includes(nome.toUpperCase())
        );

        // Listagem dos dados filtrados
        if (buscaProdutoPorNome.length > 0) {
            console.log(Colors.fg.green, `Lista de todos os produtos com o nome: ${nome}`, Colors.reset);
            buscaProdutoPorNome.forEach(produto => produto.visualizar());
        } else {
            console.log(Colors.fg.red, `Nenhum produto encontrado com o nome: ${nome}`, Colors.reset);
        }
    }

    // Métodos Auxiliares
    public gerarnumero(): number {
        return ++this._numero;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === numero) {
                return produto;
            }
        }
        return null;
    }

}