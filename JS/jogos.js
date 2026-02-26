document.addEventListener("DOMContentLoaded", () => {
    const jogos = [
        {
            data: "20/01/2025",
            local: "Ginásio Barueri",
            timeCasa: { nome: "Basquete Barueri", escudo: "jogos/barueri.png" }, //as imagens dos times tem que estar em png!
            timeVisitante: { nome: "Continental", escudo: "jogos/continental.png" },
            placar: "0 - 100"
        },//virgula apos o encerramento de chaves
        
        {
            data: "25/01/2025",
            local: "Arena São Paulo",
            timeCasa: { nome: "Basquete Barueri", escudo: "jogos/barueri.png" },
            timeVisitante: { nome: "Osasco", escudo: "jogos/butantaa.png" },
            placar: "Aguardando"
        },//virgula apos o encerramento de chaves

        //adcionar um jogo novo so dar cntrl c + cntrl v nesse codigo destacado pelos comentarios!
        {
            data: "25/01/2025",
            local: "Arena São Paulo",
            timeCasa: { nome: "Basquete Barueri", escudo: "jogos/barueri.png" }, //colocar as logos dos times é igual nos jogadores, tem que escrever o caminho manualmente. mantendo aquela mesma estrutura de (nome da pasta) + / + (nome do arquivo da foto)
            timeVisitante: { nome: "Osasco", escudo: "jogos/osasco.png" },
            placar: "Aguardando"
        } //adcionar um jogo novo so dar cntrl c + cntrl v nesse codigo destacado pelos comentarios! 
        // e quando for adcionar um jogo novo, lembre de colocar uma "," após o encerramento de chaves do outro jogo.
    ];

    const container = document.getElementById("jogos-container");

    jogos.forEach(jogo => {
        const jogoCard = document.createElement("div");
        jogoCard.classList.add("jogo-card");

        jogoCard.innerHTML = `
            <div class="equipe">
                <img src="${jogo.timeCasa.escudo}" alt="${jogo.timeCasa.nome}">
            </div>
            <div class="jogo-info">
                <p><strong>${jogo.data} - ${jogo.local}</strong></p>
                <p>${jogo.placar}</p>
                <p>vs</p>
            </div>
            <div class="equipe">
                <img src="${jogo.timeVisitante.escudo}" alt="${jogo.timeVisitante.nome}">
            </div>
        `;

        container.appendChild(jogoCard);
    });
});