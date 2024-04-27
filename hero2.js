let vitorias = 300

function status(vitorias){
    if (vitorias <= 10) {
        console.log("O herói tem um saldo de " + vitorias + " vitorias e está no nível de Ferro");
    } else if (vitorias >= 11 && vitorias <= 20) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Bronze");
    } else if (vitorias >= 21 && vitorias <= 50) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Prata");
    } else if (vitorias >= 51 && vitorias <= 80) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Ouro");
    } else if (vitorias >= 81 && vitorias <= 90) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Diamante");
    } else if (vitorias >= 91 && vitorias <= 100) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Lendário");
    } else if (vitorias >= 101) {
        console.log("O herói tem um saldo de " + vitorias + " vitórias e está no nível de Imortal");
    } else {
        console.log("Valor inconsistente. Por favor, verifique as informações e tente novamente");
    }
} 

status(vitorias)


