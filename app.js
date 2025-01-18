//
let numeroMaximo = 10;
let listaNumeroSorteado = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

console.log(numeroSecreto)
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos > 1 ? 'veces' : 'vez'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else{
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
//



/*
//----------------- Desafio 2 -----------------//
//1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function hello(){
    console.log('Hola mundo');
}

hello();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function hello2(name){
    console.log("¡Hola, " + name + "!");
}

hello2('Jonathan');

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function double(number){
    console.log(number * 2);
}

double(6);

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function average(value1, value2, value3){
    console.log( (value1 + value2 + value3) / 3);
}

average(5, 9, 8);

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function maximum(value1, value2) {
    console.log (value1 > value2 ? value1 : value2);
}

maximum(5, 9);

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function square(number) {
    console.log (number * number);
}

square(5);
*/

/*
//----------------- Desafio 3 -----------------//
//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculateIMC(weight, height) {
    if (weight <= 0 || height <= 0) {
        return 'El peso y la altura deben ser valores positivos.';
    }
    let imc = weight / (height * height);
    return `Tu IMC es ${imc}`;
}

let weight = 72; 
let height = 1.73; 
console.log(calculateIMC(weight, height));

//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calculateFactorial(number) {
    if (number < 0) {
        return 'El factorial no esta definido para numero negativos.';
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return `El factorial de ${number} es ${factorial}`;
}

console.log(calculateFactorial(5)); 

//3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertToBRL(dollars) {
    let exchangeRate = 4.80;
    if (dollars < 0) {
        return 'El valor en dolares no puede ser negativo.';
    }
    let BRL = dollars * exchangeRate;
    return `El valor de $${dollars} dolares es equivalente a R$${BRL} reales.`;
}

console.log(convertToBRL(10));

//4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calculateRoomDimensions(width, height) {
    let area = width * height;
    let perimeter = (width + height) * 2;
    return `El area de la sala es ${area} metros cuadrados y el perimetro es ${perimeter} metros.`;
}

console.log(calculateRoomDimensions(2, 8));

//5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calculateCircleDimensions(radius) {
    let pi = 3.14;
    let area = pi * radius * radius; 
    let perimeter = 2 * pi * radius;
    return `El area de la sala circular es ${area} metros cuadrados y el perímetro es ${perimeter} metros.`;
}

console.log(calculateCircleDimensions(8));

//6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function displayMultiplicationTable(number) {
    if (number <= 0) {
        return 'El numero debe ser mayor que 0.';
    }
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }
    return table;
}

console.log(displayMultiplicationTable(4)); 
*/

/*
//----------------- Desafio 4 -----------------//
//1. Crea una lista vacía llamada "listaGenerica".
let genericList = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let programmingLanguage = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
programmingLanguage.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function showProgrammingLanguages(){
    return console.log(programmingLanguage);
}
showProgrammingLanguages();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function showReversedProgrammingLanguages() {
    console.log(programmingLanguage.reverse());
}
showReversedProgrammingLanguages();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let numbers = [7, 9, 4, 7, 8, 8];

function calculateAverage(numbersArray) {
    let totalSum = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
    return totalSum / numbersArray.length;
}
console.log(calculateAverage(numbers));;

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let numbers2 = [7, 1, 4, 7, 28, 50];

function showMinMax(){
    let min = Math.min(...numbers2);
    let max = Math.max(...numbers2);

    console.log(`Numero mas grande: ${max} y el mas chico: ${min}`);
}
showMinMax();

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
let numbers3 = [7, 9, 4, 7, 8, 8];
function calculateSum(numbersArray) {
    return numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}
console.log(calculateSum(numbers3));

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
const numbers4 = [10, 2, 58, 1, 12];

function findElementPosition(element, numbersArray) {
    const position = numbersArray.indexOf(element); 
    return position !== -1 ? position : -1; 
}
console.log(findElementPosition(3, numbers4));

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let numbers5 = [1, 0, 21, 42];
let numbers6 = [15, 3, 81, 5];

function sumList(numbers1, numbers2) {
    let result = [];
    for (let i = 0; i < numbers1.length; i++) {
        result.push(numbers1[i] + numbers2[i]);
    }
    return result;
}
console.log(sumList(numbers5, numbers6));


//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let numbers7 = [3, 5, 10, 4];

function sumList2(numbers7) {
    const result = [];
    for (let i = 0; i < numbers7.length; i++) {
        result.push(numbers7[i] ** 2);
    }
    return console.log(result);
}
sumList2(numbers7);

//arreglar
function sumarListas(lista1, lista2) {
    let total = [];
    for (let i = 0; i < lista1.length; i++) {
        total.push(lista1[i] + lista2[i]);
    }
    return total;
}

console.log('La suma de las listas por elemento: ', sumarListas([5, 10, 20], [5, 10, 20]));
*/