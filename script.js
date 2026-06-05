// Exemplo de como você poderia controlar a rotação via JS se quisesse
const loader = document.querySelector('.loader-svg');

// Função para parar o spinner
function stopSpinner() {
    loader.style.animation = 'none';
    console.log("Spinner parado.");
}

// Função para iniciar o spinner novamente
function startSpinner() {
    loader.style.animation = 'rotate-loader 2s linear infinite';
    console.log("Spinner iniciado.");
}

// Inicia automaticamente
startSpinner();

// Exemplo: Para o spinner após 10 segundos
// setTimeout(stopSpinner, 10000);
