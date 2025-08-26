const leia = require ('readline-sync')

let animal1 = leia.question("Escolha Vertebrado ou Invertebrado?  ").toLowerCase();
let animal2 = leia.question("Escolha entre Ave, Mamifero, Inseto ou Anelideo: ").toLowerCase();
let animal3 = leia.question("Escolha entre Carnivoro, Onivoro, Herbivoro ou Hematofago: ").toLowerCase();


if (animal1 === "vertebrado") {
    if (animal2 === "ave") {
        if (animal3 === "carnivoro") {
            console.log(" Seu Animal é Águia");
        } else if (animal3 === "onivoro") {
            console.log(" Seu Animal é Pomba");
        }
    } else if (animal2 === "mamifero") {
        if (animal3 === "onivoro") {
            console.log("  Seu Animal é Homem");
        } else if (animal3 === "herbivoro") {
            console.log(" Seu Animal é Vaca");
        }
    }
} else if (animal1 === "invertebrado") {
    if (animal2 === "inseto") {
        if (animal3 === "hematofago") {
            console.log("  Seu Animal é Pulga");
        } else if (animal3 === "herbivoro") {
            console.log(" Seu Animal é Lagarta");
        }
    } else if (animal2 === "anelideo") {
        if (animal3 === "hematofago") {
            console.log(" Seu Animal é Sanguessuga");
        } else if (animal3 === "onivoro") {
            console.log(" Seu Animal é Minhoca");
        }
    }
}