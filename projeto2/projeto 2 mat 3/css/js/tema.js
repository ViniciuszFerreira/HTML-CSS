// Atualiza o texto do botão de acordo com o tema atual
function atualizarTextoBotao() {
    const linkTema = document.getElementById("tema");
    const botao = document.getElementById("btn-tema");

    if (!linkTema || !botao) return;

    // Se o tema atual for claro, o botão deve oferecer o modo escuro
    if (linkTema.getAttribute("href").includes("claro.css")) {
        botao.textContent = "🌙 Modo Escuro";
    } else {
        botao.textContent = "☀️ Modo Claro";
    }
}

// Função chamada ao clicar no botão
function trocarTema() {
    const linkTema = document.getElementById("tema");

    if (!linkTema) return;

    // Alterna o CSS do tema
    if (linkTema.getAttribute("href").includes("claro.css")) {
        linkTema.setAttribute("href", "css/escuro.css");
    } else {
        linkTema.setAttribute("href", "css/claro.css");
    }

    // Atualiza o texto do botão após a troca
    atualizarTextoBotao();
}

// Garante que o texto do botão esteja correto ao carregar a página
window.onload = atualizarTextoBotao;




