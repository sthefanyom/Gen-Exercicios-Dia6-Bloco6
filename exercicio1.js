const leia = require ('readline-sync')

let A, B, C
A = leia.questionInt ('Insira o Primeiro Valor:')
B = leia.questionInt ('Insira o Segundo Valor:')
C = leia.questionInt ('Insira o Terceiro Valor:')

Resultado = (A + B)

if (Resultado > C) {
    console.log('A Soma é Maior que o valor informado!')
}
else if (Resultado < C) {
     console.log('A Soma é Menor que o valor informado!')
}
else {
     console.log('A Soma é Igual ao valor informado!')
}


