let matriz = [
    [1,2,3],
    [3,1,1],
    [1,2,1]
];
let soma = 0
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
    }
}
matriz.forEach(linha => console.log(linha))
console.log(`A soma dos elementos da matriz é: ${soma}`)