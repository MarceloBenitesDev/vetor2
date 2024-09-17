let matriz = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        if (j > 1){
            matriz[i][j] = 0;
        }
    }
}

console.log("Matriz identidade:")
matriz.forEach(linha => console.log(linha));