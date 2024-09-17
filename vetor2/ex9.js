
function preencherVetor(n) {
    let v = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            v.push("Par");
        } else {
            v.push("Ímpar");
        }
    }

    return v;
}


let n = 6;
let vp = preencherVetor(n);


console.log("Vetor preenchido:");
console.log(vp);