<!DOCTYPE html>
<html>
<head>
  <link href="jogodavelha.css" rel="stylesheet" type="text/css" />
  <style>
    #board {
      border: thin solid red;
      width: 420px;
      height: 420px;
      overflow: hidden;
    }

    .casinha {
      width: 135px;
      height: 135px;
      border: thin solid;
      float: left;
      text-align: center;
      line-height: 135px;
      font-size: 80px;
    }

    .gray {
      background: black;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <h1>Jogo da Velha</h1>
  <div id="board">
    <div class="casinha"></div>
    <div class="casinha gray"></div>
    <div class="casinha"></div>
    <div class="casinha gray"></div>
    <div class="casinha"></div>
    <div class="casinha gray"></div>
    <div class="casinha"></div>
    <div class="casinha gray"></div>
    <div class="casinha"></div>
  </div>
  <div id="vencedor"></div>
  <script type="text/javascript">
    const board = document.getElementById("board");
    const casinhas = board.getElementsByClassName("casinha");
    const boxVencedor = document.getElementById("vencedor");

    let jogadas = 0;
    let jogoAcabou = false;

    for (let i = 0; i < casinhas.length; i++) {
      casinhas[i].addEventListener('click', casinhaclick);
    }

    function casinhaclick() {
      if (jogoAcabou) return; // Não permitir mais jogadas se o jogo já acabou

      if (this.innerHTML === "") {
        if (jogadas % 2 === 0) {
          this.innerHTML = "X";
        } else {
          this.innerHTML = "O";
        }
        jogadas += 1;
        verificaGanhador();
      }
    }

    function verificaGanhador() {
      // Validar na horizontal
      for (let i = 0; i <= 6; i += 3) {
        if (casinhas[i].innerHTML !== "" &&
            casinhas[i].innerHTML === casinhas[i + 1].innerHTML &&
            casinhas[i + 1].innerHTML === casinhas[i + 2].innerHTML) {
          boxVencedor.innerHTML = "O '" + casinhas[i].innerHTML + "' Venceu!";
          jogoAcabou = true;
          return;
        }
      }

      // Validar na vertical
      for (let i = 0; i <= 2; i++) {
        if (casinhas[i].innerHTML !== "" &&
            casinhas[i].innerHTML === casinhas[i + 3].innerHTML &&
            casinhas[i + 3].innerHTML === casinhas[i + 6].innerHTML) {
          boxVencedor.innerHTML = "O '" + casinhas[i].innerHTML + "' Venceu!";
          jogoAcabou = true;
          return;
        }
      }

      // Validar na diagonal
      if (casinhas[0].innerHTML !== "" &&
          casinhas[0].innerHTML === casinhas[4].innerHTML &&
          casinhas[4].innerHTML === casinhas[8].innerHTML) {
        boxVencedor.innerHTML = "O '" + casinhas[0].innerHTML + "' Venceu!";
        jogoAcabou = true;
        return;
      }

      if (casinhas[2].innerHTML !== "" &&
          casinhas[2].innerHTML === casinhas[4].innerHTML &&
          casinhas[4].innerHTML === casinhas[6].innerHTML) {
        boxVencedor.innerHTML = "O '" + casinhas[2].innerHTML + "' Venceu!";
        jogoAcabou = true;
        return;
      }

      // Verificar se todas as casinhas estão preenchidas (empate)
      let todasPreenchidas = true;
      for (let i = 0; i < casinhas.length; i++) {
        if (casinhas[i].innerHTML === "") {
          todasPreenchidas = false;
          break;
        }
      }

      if (todasPreenchidas) {
        boxVencedor.innerHTML = "Empate!";
        jogoAcabou = true;
      }
    }
  </script>
</body>
</html>
