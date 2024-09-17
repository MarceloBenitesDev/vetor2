function encontrarMaiorNumero(n) {
    if (n.lenght === 0) {
        throw new Error("Não há vetor.");
    }
    return Math.max(...n);
}

let n = [11, 95, 67, 8];
let maior = encontrarMaiorNumero(n)

console.log(n)
console.log(maior)