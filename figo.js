document.addEventListener("DOMContentLoaded", function() {
    const nomeEsperado = "Ariston"; 
    let nome = prompt("Qual é o seu nome?");
    
    while (nome === null || nome.trim().toLowerCase() !== nomeEsperado.toLowerCase()) {
        alert("Nome incorreto! Tente novamente.");
        nome = prompt("Qual é o seu nome?");
    }

    document.body.style.display = 'block';
});
