const board = document.getElementById("board");
const casinhas = board.getElementsByClassName("casinha");
const boxVencedor = document.getElementById("vencedor");

let jogadas = 0;
let jogoAcabou = false;

for (let i = 0; i < casinhas.length; i++) {
  casinhas[i].addEventListener('click', casinhaclick);
}

function casinhaclick() {
  if (jogoAcabou || this.innerHTML !== "") return; // Não permitir jogadas se o jogo já acabou ou a casa já estiver preenchida

  if (jogadas % 2 === 0) {
    this.innerHTML = "X";
  } else {
    this.innerHTML = "O";
  }
  jogadas += 1;
  
  verificaGanhador();
}

function verificaGanhador() {
  const linhas = [
    [0, 1, 2], // primeira linha
    [3, 4, 5], // segunda linha
    [6, 7, 8], // terceira linha
    [0, 3, 6], // primeira coluna
    [1, 4, 7], // segunda coluna
    [2, 5, 8], // terceira coluna
    [0, 4, 8], // diagonal principal
    [2, 4, 6]  // diagonal secundária
  ];

  for (let linha of linhas) {
    const [a, b, c] = linha;
    if (casinhas[a].innerHTML !== "" &&
        casinhas[a].innerHTML === casinhas[b].innerHTML &&
        casinhas[b].innerHTML === casinhas[c].innerHTML) {
      boxVencedor.innerHTML = "O '" + casinhas[a].innerHTML + "' Venceu!";
      jogoAcabou = true;
      return;
    }
  }

  // Verificar se todas as casinhas estão preenchidas (empate)
  if (jogadas === 9) {
    boxVencedor.innerHTML = "Empate!";
    jogoAcabou = true;
  }
}
