import { Roupa } from "./model/Roupa";
import { Sapato } from "./model/Sapato";
import { Acessorio } from "./model/Acessorio";
import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";
import { ProdutoController } from "./controller/ProdutoController";
//import { Produto } from "./model/Produto"; Instanciando para testes, antes de tornar abstrata


// Criação de Objeto Global da Classe Produto Controller
const produtoController = new ProdutoController();

// Seção para futura criação de array contendo os tipos de produto
const tipoProdutos = ['Roupa', 'Sapato', 'Acessorio'];

export function main() {

    let opcao: number;

    // Chamada para a criação de produtos testes para validar a aplicação
    criarProdutosTeste();


    //Criação do Menu

    while (true) {
        console.log(Colors.fg.magenta,
            "********************************************************");
        console.log("              ECOMMERCE VAREJO FEMININO                           ");
        console.log("***********************************************************");
        console.log("           1 - Criar Produto                               ");
        console.log("           2 - Listar todas os Produtos                    ");
        console.log("           3 - Consultar Produto por ID                    ");
        console.log("           4 - Atualizar Produto                           ");
        console.log("           5 - Deletar Produto                             ");
        console.log("           6 - Consultar Produto por nome                  "); //Função Extra
        console.log("           0 - Sair                                        ");
        console.log("*********************************************************",
            Colors.reset);

        console.log("Digite a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.bluestrong, "ECOMMERCE VAREJO FEMININO", Colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("Criar Produto");
                criarProduto()
                keyPress();
                break;

            case 2:
                console.log("Listar todos os Produtos");
                produtoController.listarProdutos();
                keyPress();
                break;

            case 3:
                console.log("Consultar Produto por ID");
                consultarProdutoPorID();
                keyPress();
                break;

            case 4:
                console.log("Atualizar Produto");
                atualizarProduto();
                keyPress();
                break;

            case 5:
                console.log("Deletar Produto");
                deletarProduto();
                keyPress();
                break;

            case 6:
                console.log("Consultar Produto por Nome");
                consultarPorNome();
                keyPress();
                break;

            default:
                console.log(Colors.fg.redstrong,
                    "Operação inválida! Tente novamente.",
                    Colors.reset);
                keyPress();
                break;
        }
    }
}

// Opção 1: Criar Produto

function criarProduto(): void {
    console.log("Digite o nome do produto: ");
    const nome = Input.question("");

    console.log("Digite o tipo do produto: ");
    const tipo = Input.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

    console.log("Digite o preço do produto: ");
    const preco = Input.questionFloat("");

    switch (tipo) {
        case 1: // Cria objeto da Classe Roupa
            console.log("Digite o Tamanho da Roupa: ");
            const tamanho = Input.question("");

            console.log("Digite o Tecido da Roupa: ");
            const tecido = Input.question("");

            console.log("Digite a Peça de Roupa: ");
            const peca = Input.question("");

            produtoController.cadastrarProduto(new Roupa(produtoController.gerarnumero(),
                nome, tipo, preco, tamanho, tecido, peca));
            break;

        case 2: // Cria objeto da Classe Sapato
            console.log("Digite a numeração do Sapato: ");
            const numeracao = Input.questionInt("");

            produtoController.cadastrarProduto(new Sapato(produtoController.gerarnumero(),
                nome, tipo, preco, numeracao));
            break;

        case 3: // Cria objeto da Classe Acessorio 
            console.log("Digite o Modelo do Acessório: ");
            const modelo = Input.question("");

            produtoController.cadastrarProduto(new Acessorio(produtoController.gerarnumero(),
                nome, tipo, preco, modelo));
            break;
    }

}

// Opção 2: Listar todos os Produto
// Ver case 2 do Menu

// Opção 3: Consultar Produto por ID
function consultarProdutoPorID(): void {
    console.log("Digite o ID do produto que gostaria de buscar: ");
    const numero = Input.questionInt("");
    produtoController.consultarPorId(numero);
}

// Opção 4: Atualizar Produto

function atualizarProduto(): void {

    console.log("Digite o ID do produto que gostaria de atualizar: ");
    const id = Input.questionInt("");

    const produto = produtoController.buscarNoArray(id);

    if (produto !== null) {

        // Guarda os valores atuais do produto
        let nome: string = produto.nome
        const tipo: number = produto.tipo;
        let preco: number = produto.preco;

        // Atualização do nome
        console.log(`Nome atual: ${nome}`);
        console.log("Digite o novo nome do Produto: ");
        console.log(Colors.fg.yellowstrong,
            "\nPressione ENTER para manter o Nome atual",
            Colors.reset);
        nome = Input.question("", { defaultInput: nome });

        // Atualização do preço
        console.log(`Preço atual: ${formatarMoeda(preco)}`);
        console.log("Digite o novo preço do Produto: ");
        console.log(Colors.fg.yellowstrong,
            "\nPressione ENTER para manter o Preço atual",
            Colors.reset);
        preco = Input.questionFloat("", { defaultInput: preco });

        // Atualização dentro do Tipo

        switch (tipo) {
            case 1: // Classe Roupa
                //Atualização do Tamanho
                let tamanho: string = (produto as Roupa).tamanho;

                console.log(`Tamanho atual da Roupa: ${tamanho}`);
                console.log("Digite o novo Tamanho da Roupa: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Tamanho atual",
                    Colors.reset);

                tamanho = Input.question("", { defaultInput: tamanho });

                // Atualização do Tecido

                let tecido: string = (produto as Roupa).tecido;

                console.log(`Tecido atual da Roupa: ${tecido}`);
                console.log("Digite o novo Tecido da Roupa: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Tecido atual",
                    Colors.reset);

                tecido = Input.question("", { defaultInput: tecido });

                // Atualização da peça
                let peca: string = (produto as Roupa).peca;

                console.log(`Peca atual de Roupa: ${peca}`);
                console.log("Digite a nova peca de Roupa: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter a Peça atual",
                    Colors.reset);

                peca = Input.question("", { defaultInput: peca });

                // Chamando o método de atualizar
                produtoController.atualizarProduto(new Roupa(id,
                    nome, tipo, preco, tamanho, tecido, peca));

                break;

            case 2: // Classe Sapato
                let numeracao: number = (produto as Sapato).numeracao;

                console.log(`Tamanho atual do Sapato: ${numeracao}`);
                console.log("Digite o novo Tamanho para o Sapato: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Tamanho atual",
                    Colors.reset);

                numeracao = Input.questionInt("", { defaultInput: numeracao });

                //Chamando o método de atualizar
                produtoController.atualizarProduto(new Sapato(id,
                    nome, tipo, preco, numeracao));

                break;

            case 3: // Classe Acessorio 
                let modelo: string = (produto as Acessorio).modelo;

                console.log(`Modelo atual do Acessorio: ${modelo}`);
                console.log("Digite o novo Modelo para o Acessorio: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Modelo atual",
                    Colors.reset);

                modelo = Input.question("", { defaultInput: modelo });

                //Chamando o método de atualizar
                produtoController.atualizarProduto(new Acessorio(id,
                    nome, tipo, preco, modelo));

                break;
        }
    }
}

// Opção 5: Deletar Produto

function deletarProduto(): void {
    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");

    const produto = produtoController.buscarNoArray(id);

    if (produto !== null) {
        console.log(Colors.fg.whitestrong,
            `Deseja prosseguir com a exclusão do produto de ID: ${id} (Sim/Não)? `,
            Colors.reset);
        let confirmacao = Input.question("").toUpperCase();

        if (confirmacao === "SIM") {
            produtoController.deletarProduto(id);
        } else {
            console.log(Colors.fg.red, "Operação cancelada!",
                Colors.reset);
        }
    } else {
        console.log(Colors.fg.red,
            `O produto de ID: ${id} não foi encontrado! `,
            Colors.reset);
    }
}
// Opção 6: Consultar Produto por Nome

function consultarPorNome() {
    console.log("Digite o nome do produto que deseja buscar: ");
    const produto = Input.question("");
    produtoController.procurarPorNomeProduto(produto);

}


// Função com os dados da pessoa desenvolvedora
export function sobre(): void {
    console.log("**************************************************");
    console.log(Colors.fg.blue, "Projeto desenvolvido por Jeaninny Teixeira");
    console.log(" jeaninny.teixeira@gmail.com");
    console.log(" github.com/Jeaninny", Colors.reset, "");
    console.log("**************************************************");
}

// Função de pausa entre as opções do menu
function keyPress(): void {
    console.log(Colors.fg.yellow,
        "Pressione enter para continuar...",
        Colors.reset);
    Input.prompt();
}

// Produtos para testes

function criarProdutosTeste(): void {

    // Instâncias da Classe Roupa
    produtoController.cadastrarProduto(new Roupa(produtoController.gerarnumero(), "Vestido Midi Floral", 1, 329.99, "M", "Viscose", "Vestido"));
    produtoController.cadastrarProduto(new Roupa(produtoController.gerarnumero(), "Blusa Manga", 1, 119, "P", "Algodão", "Blusa"));
    produtoController.cadastrarProduto(new Roupa(produtoController.gerarnumero(), "Saia Plissada", 1, 230.50, "G", "Algodão", "Saia"));
    produtoController.cadastrarProduto(new Roupa(produtoController.gerarnumero(), "Calça Jeans Preta", 1, 300.90, "M", "Jeans", "Calça"));

    // Instâncias da Classe Sapato
    produtoController.cadastrarProduto(new Sapato(produtoController.gerarnumero(), "Sandália Salto", 2, 189.90, 37));
    produtoController.cadastrarProduto(new Sapato(produtoController.gerarnumero(), "Tênis Branco", 2, 259.90, 38));
    produtoController.cadastrarProduto(new Sapato(produtoController.gerarnumero(), "Scarpin Salto Fino", 2, 219.90, 36));
    produtoController.cadastrarProduto(new Sapato(produtoController.gerarnumero(), "Rasteira Tiras", 2, 149.90, 35));


    // Instâncias da Classe Acessorio
    produtoController.cadastrarProduto(new Acessorio(produtoController.gerarnumero(), "Bolsa Transversal Couro Preto", 3, 399.90, "Bolsa"));
    produtoController.cadastrarProduto(new Acessorio(produtoController.gerarnumero(), "Cinto Couro", 3, 99.90, "Cinto"));
    produtoController.cadastrarProduto(new Acessorio(produtoController.gerarnumero(), "Colar Dourado", 3, 79.90, "Colar"));
    produtoController.cadastrarProduto(new Acessorio(produtoController.gerarnumero(), "Carteira", 3, 159.90, "Carteira"));

}

main()


/* Testes para a classe Produto antes de torná-la abstrata
 Objeto da Classe Produto (teste)     
const produtoTeste: Produto = new Produto(1, "Vestido", 1, 20.4);
produtoTeste.id
produtoTeste.nome;
produtoTeste.preco;
produtoTeste.tipo;
produtoTeste.visualizar();

// Testes antes da Criação do Produto Controller
// Roupa
const roupa = new Roupa(123, "Vestido Pink Floral", 1, 350, "M", "Viscose", "Vestido");
roupa.visualizar();

// Sapato
const sapato = new Sapato(456, "Sapato All Black", 2, 130.50, 35);
sapato.visualizar();

// Acessorio
const acessorio = new Acessorio(789, "Bolsa Lateral Couro", 3, 400, "Bolsa");
acessorio.visualizar();
*/