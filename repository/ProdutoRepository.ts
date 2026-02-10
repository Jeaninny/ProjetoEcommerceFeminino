import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    // Métodos do CRUD (Create, Read, Update, Delete)
    consultarPorId(id: number): void;
    listarProdutos(): void;
    cadastrarProduto(produto: Produto): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
    procurarPorNomeProduto(nome: string): void;
}