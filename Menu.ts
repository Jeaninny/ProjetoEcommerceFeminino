import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";


// Seção para testes futuros


// Seção para futura criação de Objeto Global da Classe Produto Controller


// Seção para futura criação de array contendo os tipos de produto



export function main() {

    let opcao: number;

    // Chamada para a criação de produtos testes para validar a aplicação

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
        console.log("           6 - Consultar Produto por nome                  "); //Futuramente a ser implementado como extra
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
                keyPress();
                break;

            case 2:
                console.log("Listar todos os Produtos");                
                keyPress();
                break;

            case 3:
                console.log("Consultar Produto por ID");                
                keyPress();
                break;

            case 4:
                console.log("Atualizar Produto");                
                keyPress();
                break;

            case 5:
                console.log("Deletar Produto");
                keyPress();
                break;

            case 6:
                console.log("Consultar Produto por Nome");
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

// Seção para futura criação de Produtos para testes



main()