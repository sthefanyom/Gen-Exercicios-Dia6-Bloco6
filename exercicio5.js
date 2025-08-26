const leia = require('readline-sync');

let menu, quantidade, valor

menu = leia.questionInt ('Selecione o Produto Desejado: 1 - HotDog  | 2 - XSalada | 3 - XBacon | 4 - Bauru  | 5 - Refrigerante | 6 - Suco: ' )
quantidade = leia.questionInt (" Qual a Quantidade Desejada? ");

switch (menu) {
    case 1: 
        valor = quantidade*10.00;
        console.log('Produto: HotDog Valor Total: '+ new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL',}).format(valor));
    break;

    case 2: 
        valor = quantidade*15.00;
        console.log('Produto: XSalada Valor Total: '+ new Intl.NumberFormat('pt-BR' , {
     style: 'currency', currency: 'BRL',}).format(valor));
     break;
        
    case 3:
        valor = quantidade*18.00;
        console.log('Produto: XBacon Valor Total: '+ new Intl.NumberFormat('pt-BR' , {
     style: 'currency', currency: 'BRL',}).format(valor));
     break;
        
    case 4:
        valor = quantidade*12.00;
        console.log('Produto: Bauru Valor Total: '+ new Intl.NumberFormat('pt-BR' , {
     style: 'currency', currency: 'BRL',}).format(valor));
     break;  
    case 5:
        valor = quantidade*8.00;
        console.log('Produto: Refrigerante Valor Total: '+ new Intl.NumberFormat('pt-BR' , {
     style: 'currency', currency: 'BRL',}).format(valor)); 
     break;  
        
    case 6:
        valor = quantidade*13.00;
        console.log('Produto: Suco Valor Total: '+ new Intl.NumberFormat('pt-BR' , {
     style: 'currency', currency: 'BRL',}).format(valor));
     break;  
    
    
    default:
        console.log("Código inválido!");
        break;
}

