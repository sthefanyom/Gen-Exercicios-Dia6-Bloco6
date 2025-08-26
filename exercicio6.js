const leia = require('readline-sync');

let nome, cargo, salario, novosalario;

nome = leia.question('Informe o Nome do colaborador: ');
cargo = leia.questionInt('Informe o Codigo do Cargo (1 a 6): ');
salario = leia.questionFloat('Informe o Salario: ');

switch (cargo) {
    case 1: // Gerente - 10%
        novosalario = salario + (salario * 0.10);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Gerente`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    case 2: // Vendedor - 7%
        novosalario = salario + (salario * 0.07);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Vendedor`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    case 3: // Supervisor - 9%
        novosalario = salario + (salario * 0.09);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Supervisor`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    case 4: // Motorista - 6%
        novosalario = salario + (salario * 0.06);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Motorista`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    case 5: // Estoquista - 5%
        novosalario = salario + (salario * 0.05);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Estoquista`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    case 6: // Técnico de TI - 8%
        novosalario = salario + (salario * 0.08);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Técnico de TI`);
        console.log(`Salário: R$ ${novosalario.toFixed(2)}`);
        break;
    default:
        console.log('Código de cargo inválido!');
        break;
}