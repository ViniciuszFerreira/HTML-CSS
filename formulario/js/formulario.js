// Seleciona o elemento <input type="range"> pelo id "nota"
const range = document.getElementById("nota");

// Seleciona o elemento <output> onde será exibido o valor do range
const output = document.getElementById("valorNota");

// Adiciona um "escutador de evento" ao range
// O evento "input" é disparado toda vez que o usuário move o controle
range.addEventListener("input", function () {

    // Atualiza o texto do <output> com o valor atual do range
    // range.value pega o número selecionado
    output.textContent = range.value;

});

// Seleciona o formulário pelo id "formContato"
// e adiciona um evento que será executado quando o usuário tentar enviar
document.getElementById("formContato").addEventListener("submit", function (event) {

    // Captura o valor digitado no campo nome
    // trim() remove espaços extras no começo e no final
    const nome = document.getElementById("nome").value.trim();

    // Captura o valor digitado no campo email
    const email = document.getElementById("email").value.trim();

    // Captura o valor selecionado no campo select (nível)
    const nivel = document.getElementById("nivel").value;


    // Verifica se o nome tem menos de 3 caracteres
    if (nome.length < 3) {

        // Exibe uma mensagem de alerta
        alert("O nome deve ter pelo menos 3 caracteres.");

        // Impede o envio do formulário
        event.preventDefault();

        // Interrompe a execução da função
        return;
    }

    // Verifica se o email contém o caractere "@"
    if (!email.includes("@")) {

        // Exibe mensagem de erro
        alert("Digite um email válido.");

        // Impede o envio do formulário
        event.preventDefault();

        // Interrompe a execução
        return;
    }

    // Verifica se nenhuma opção foi selecionada
    if (nivel == "") {

        // Exibe mensagem
        alert("Selecione o nível.");

        // Impede envio
        event.preventDefault();

        // Interrompe execução
        return;
    }

    // Se todas as validações passarem,
    // o formulário será enviado normalmente
    alert("Formulário enviado com sucesso!");

});


