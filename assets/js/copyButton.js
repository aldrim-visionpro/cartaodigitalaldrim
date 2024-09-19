document.getElementById("copyButton").addEventListener("click", function() {
    // Seleciona apenas a chave Pix (número do celular)
    const pixKey = document.getElementById("pixKey").innerText;

    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement("input");
    tempInput.value = pixKey;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

    // Mensagem de confirmação (opcional)
    alert("Chave Pix copiada para a área de transferência!");
});
