const leia = require ('readline-sync')

let nome = leia.question ('Informe seu Nome: ')
let idade = leia.questionInt ('Informe sua Idade: ')
let doacao = leia.keyInYN ('Sua Primeira vez Doando?')

if (idade >= 18 && idade <= 60) {
    console.log(`${nome}, Esta Apto(a) para doar sangue.`)
} else if (idade >= 61 && idade <= 69) {
    if (doacao) {
        console.log(`${nome}, Esta Apto(a) para doar sangue.`)
    } else {
        console.log(`${nome}, Nao esta Apto(a), pois nessa faixa etaria precisa ter doado antes.`)
    }
} else {
    console.log(`${nome}, Nao esta Apto(a) para doar sangue.`)
}

