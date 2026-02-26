function mostrarIframe(tipo) {
    const iframeArea = document.getElementById("iframe-area");
    let src = "";

    if (tipo === "proximos") {
        src = "https://copafacil.com.br/-dxkg0@mobjz"; 
    } else if (tipo === "passados") {
        src = "https://copafacil.com.br/-dxkg0@mobjz";
    } else if (tipo === "tabela") {
        src = "https://copafacil.com.br/-dxkg0@mobjz";
    }

    iframeArea.innerHTML = `
        <iframe src="${src}" frameborder="0" allowfullscreen></iframe>
    `;
}

function fecharIframes() {
    const iframeArea = document.getElementById("iframe-area");
    iframeArea.innerHTML = ""; // Some com o iframe
}
