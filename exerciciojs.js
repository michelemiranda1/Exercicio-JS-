// Calculadora 

// Inserir os dados 
let numero1 = prompt = "Insira um número";
let numero2 = prompt = "Insira um número";
let operação = prompt = 'Insira uma operação';

// Ver o tipo da operação fazer a conta e dar o resultado no console.log
if (operação == 'adição') {
    let resultado = numero1 + numero2
    console.log(`O resultado é ${resultado}`);
} else if (operação == 'subtração') {
    let resultado = numero1 - numero2
    console.log(`O resultado é ${resultado}`)
} else if (operação == 'multiplicação') {
    let resultado = numero1 * numero2
    alert = (`O resultado é ${resultado}`);
} else if (operação == 'divisão') {
    numero1/numero2
    console.log(`O resultado é ${resultado}`);
} else {
    console.log('Não foi possível realizar a operação');
}


// Número primo
let numeroPrimo = prompt ='Insira um número';

if (numeroPrimo < 1) {
    console.log('Não é um número primo');
} else {
    if (numeroPrimo % 2 == 0) {
        console.log('É um número primo');
    }
}

// Caracteres especiais 

let CaracteresIns = prompt='Insira um texto qualquer';
let Caracteres = '!@#$%&*';
let contar = CaracteresIns.match(Caracteres);
console.log(contar);



// Notas

let nota1 = prompt = 'Insira sua primeira nota';
console.log(nota1)
let nota2 = prompt = 'Insira sua segunda nota';
console.log(nota2)
let nota3 = prompt ='Insira sua terceira nota';
console.log(nota3)
let nota4 = prompt ='Insira sua quarta nota';
console.log('Insira sua quarta nota');

let media = (nota1 + nota2 + nota3 + nota4)/4 ;

if (media >= 7) {
    console.log('Aprovado')
} else if (media >= 5 || media <= 7) {
    console.log(Recuperação);
} else if (media < 5) {
    console.log('Reprovado');
} else {
    console.log('Indefinido');
}


// Numero aleatório 
let numeroAleatorio = (Math.floor(Math.random)+100);
let numeroChute = prompt ='Chute o número';

if (numeroChute === numeroAleatorio) {
    console.log('Você acertou o número');
} else {
    if(numeroChute > numeroAleatorio) {
        console.log(`O ${numeroChute} é maior que o numero aleatório.`);
    } 
    else {
        if(numeroChute < numeroAleatorio) {
            console.log(`O ${numeroChute} é menor que o número aleatório. TENTE NOVAMENTE`);
        }
    else {
        console.log('Número inválido!');
    }    
    } 
}
