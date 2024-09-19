document.addEventListener("DOMContentLoaded", function() {
    // Define uma lista de URLs para as quais você quer redirecionar
    const randomPages = [
        "https://nubank.com.br/cobrar/50wp9/66ec1d6f-a6ed-406b-b0da-3d9512d2f3f4"
    ];

    // Gera um número aleatório com base no número de páginas disponíveis
    const randomIndex = Math.floor(Math.random() * randomPages.length);

    // Cria o link
    const randomLink = document.createElement("a");
    randomLink.href = randomPages[randomIndex];
    randomLink.textContent = "Pagar com QR Code";
    randomLink.target = "_blank"; // Abre o link em uma nova aba

    // Seleciona o span e insere o link nele
    const randomLinkContainer = document.getElementById("randomLinkContainer");

    // Substitui o texto "Pagar com QR Code" pelo link
    randomLinkContainer.innerHTML = ''; // Limpa o conteúdo do span
    randomLinkContainer.appendChild(randomLink); // Adiciona o link ao span
});
