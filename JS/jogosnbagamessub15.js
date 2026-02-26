const categoria = 'sub15';
const chaveStorage = `jogos_${categoria}`;

const form = document.getElementById('form');
const lista = document.getElementById('lista');

// Verifica se está na página admin
const estaNaAdmin = window.location.pathname.includes("admin");

function carregarJogos() {
  return JSON.parse(localStorage.getItem(chaveStorage)) || [];
}

function salvarJogos(jogos) {
  localStorage.setItem(chaveStorage, JSON.stringify(jogos));
}

// Formata data de aaaa-mm-dd para dd/mm/aaaa
function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function exibirJogos() {
  if (!lista) return;
  const jogos = carregarJogos();
  lista.innerHTML = '';

  jogos.forEach((jogo, index) => {
    const div = document.createElement('div');
    div.classList.add("jogo");
    div.innerHTML = `
      <div class="topo"><strong>${formatarData(jogo.data)}</strong> - ${jogo.local}</div>
      <div class="conteudo">
        <div class="time">
          <img src="${jogo.imgCasa}" alt="Time Casa">
          <div class="placar">${jogo.placar ? jogo.placar.split('x')[0] : ''}</div>
        </div>
        <div class="x">X</div>
        <div class="time">
          <div class="placar">${jogo.placar ? jogo.placar.split('x')[1] : ''}</div>
          <img src="${jogo.imgFora}" alt="Time Fora">
        </div>
      </div>
    `;

    if (estaNaAdmin) {
      const botoes = document.createElement('div');
      botoes.style.marginTop = "10px";
      botoes.innerHTML = `
        <button onclick="editarPlacar(${index})">Editar Placar</button>
        <button onclick="excluirJogo(${index})">Excluir</button>
      `;
      div.appendChild(botoes);
    }

    lista.appendChild(div);
  });
}

function excluirJogo(index) {
  const jogos = carregarJogos();
  jogos.splice(index, 1);
  salvarJogos(jogos);
  exibirJogos();
}

function editarPlacar(index) {
  const jogos = carregarJogos();
  const jogo = jogos[index];
  const novoPlacar = prompt(`Editar placar do jogo ${jogo.timeCasa} x ${jogo.timeFora}`, jogo.placar || '');
  if (novoPlacar !== null) {
    jogo.placar = novoPlacar;
    salvarJogos(jogos);
    exibirJogos();
  }
}

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const imgCasaFile = document.getElementById('imgCasa').files[0];
    const imgForaFile = document.getElementById('imgFora').files[0];

    if (!imgCasaFile || !imgForaFile) {
      alert("Selecione ambas as imagens.");
      return;
    }

    const readerCasa = new FileReader();
    const readerFora = new FileReader();

    readerCasa.onload = function (e1) {
      const imgCasaResult = e1.target.result;

      readerFora.onload = function (e2) {
        const imgForaResult = e2.target.result;

        const novoJogo = {
          data: document.getElementById('data').value,
          local: document.getElementById('local').value,
          timeCasa: document.getElementById('timeCasa').value,
          imgCasa: imgCasaResult,
          timeFora: document.getElementById('timeFora').value,
          imgFora: imgForaResult,
          placar: document.getElementById('placar').value,
        };

        const jogos = carregarJogos();
        jogos.push(novoJogo);
        salvarJogos(jogos);
        form.reset();
        exibirJogos();
      };
      readerFora.readAsDataURL(imgForaFile);
    };
    readerCasa.readAsDataURL(imgCasaFile);
  });
}

exibirJogos();
