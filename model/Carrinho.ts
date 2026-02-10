import { Produto } from "./Produto";

export class Carrinho {
    private itensCarrinho = new Array<Produto>;

    adicionarNoCarrinho(produto: Produto): void {
        this.itensCarrinho.push(produto);
    }

    visualizarCarrinho(): void {
        console.log("Itens no carrinho: ");
        this.itensCarrinho.forEach((produto) => produto.visualizar());
    }


    removerDoCarrinho(id: number): void {
        const index = this.itensCarrinho.findIndex((produto) => id === produto.id)

        this.itensCarrinho.splice(index, 1);
    }


    public buscarNoCarrinho(numero: number): Produto | null {
        for (let produto of this.itensCarrinho) {
            if (produto.id === numero) {
                return produto;
            }
        }
        return null;
    }
}