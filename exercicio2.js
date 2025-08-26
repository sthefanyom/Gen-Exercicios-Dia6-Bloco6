const leia = require ('readline-sync')

let numero = leia.questionInt('Informe um Numero Inteiro: ');

if (numero > 0)
    console.log ('Esse número é Positivo')
else if ( numero < 0)
    console.log ('Esse número é Negativo')
else 
    console.log ('Esse número é Zero')

if (numero === 0)
    console.log('Zero não é par nem ímpar');
else if (numero % 2 === 0)
    console.log ('e Par')
else
    console.log ('e Ímpar')



