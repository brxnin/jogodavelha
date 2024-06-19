document.addEventListener('DOMContentLoaded', function() {
    const casinhas = document.querySelectorAll('.casinha');
    const boxVencedor = document.getElementById('vencedor');
    const restartButton = document.getElementById('restart');
  
    let jogadorAtual = 'X';
    let jogoAcabou = false;
  
    casinhas.forEach(casinha => {
      casinha.addEventListener('click', function() {
        if (jogoAcabou || casinha.innerHTML !== '') return;
        
        casinha.innerHTML = jogadorAtual;
        verificarVencedor();
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Troca de jogador
      });
    });
  
    restartButton.addEventListener('click', function() {
      resetarJogo();
    });
  
    function verificarVencedor() {
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
        if (casinhas[a].innerHTML !== '' &&
            casinhas[a].innerHTML === casinhas[b].innerHTML &&
            casinhas[b].innerHTML === casinhas[c].innerHTML) {
          exibirResultado(`${casinhas[a].innerHTML} Venceu!`);
          jogoAcabou = true;
          return;
        }
      }
  
      // Verificar se todas as casinhas estão preenchidas (empate)
      let todasPreenchidas = true;
      for (let casinha of casinhas) {
        if (casinha.innerHTML === '') {
          todasPreenchidas = false;
          break;
        }
      }
  
      if (todasPreenchidas && !jogoAcabou) {
        exibirResultado('Empate!');
        jogoAcabou = true;
      }
    }
  
    function exibirResultado(mensagem) {
      boxVencedor.innerHTML = `<p>${mensagem}</p>`;
    }
  
    function resetarJogo() {
      casinhas.forEach(casinha => {
        casinha.innerHTML = '';
      });
      boxVencedor.innerHTML = '';
      jogoAcabou = false;
      jogadorAtual = 'X';
    }
  });
  
