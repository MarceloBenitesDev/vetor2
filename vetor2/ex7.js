function calcularMedia(n) {
    if (n.length === 0) {
        throw new Error("Não há vetor.")
    }

    let soma = n.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let media = soma / n.length;
    return media;
}

let n = [2,4,5,3,9,5];
let media = calcularMedia(n);

console.log(n);
console.log(media);