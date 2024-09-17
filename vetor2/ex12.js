let matriz = [
    [2,7,1],
    [3,4,8]
];

let maior = matriz[0][0];
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
}

matriz.forEach(linha => console.log(linha));
console.log(`Maior elemento na matriz: ${maior}`)