let partida = true;
while (partida) {
    const numeroComputador = Math.floor(Math.random() * 100) + 1;
    const tentativasTotal = 3;
    let tentativasUsadas = 0;
    let jogadaCerta = false;
    while (tentativasUsadas < tentativasTotal) {
        let jogadaPessoa = prompt('Digite seu palpite de número (entre 1 e 100): ');
        jogadaPessoa = parseInt(jogadaPessoa);
        if (jogadaPessoa > 1 && jogadaPessoa < 100) {
            if (jogadaPessoa == numeroComputador) {
                alert("Você acertou o número.");
                partida = true;
                break;
            }
            else if (jogadaPessoa < numeroComputador) {
                alert("O número secreto é maior que seu palpite.");
            }
            else if (jogadaPessoa > numeroComputador) {
                alert("O número secreto é menor que seu palpite.");
            } tentativasUsadas++;
        } else {
            alert("A jogada não foi realizada da forma correta.");
        }
    }
    if (tentativasUsadas == 3) {
        alert("Você atingiu o total de tentativas e não conseguiu vencer a partida.");
    }
    const escolha = prompt("Deseja jogar novamente? (Sim ou Não):").toLowerCase().trim();
    if (escolha != "sim") {
        partida = false;
    }
}