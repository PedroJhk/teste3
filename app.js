function verificarChute() {
    console.log('O Botão foi clicado!')
};

function showAlert() {
    alert("eu odeio JS")
};
let resposta
function pergunta()
{
    resposta = prompt("de qual cidade você veio?")

     alert("Estive em    " + resposta + "   e  lembrei de você")
};


let numero = 5;

function calcular(){
    if(numero === 0 || numero === 2) {
        return 1
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;

    
};
let resultado = calcular(numero);
console.log(`o fatorial de ${numero} é ${resultado}`);

let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push = ['Java', 'Ruby', 'GoLang']
console.log(`${linguagensDeProgramacao[1]} ${linguagensDeProgramacao[2]} ${linguagensDeProgramacao[3]}`)


// function calcular(){
//     a = prompt("qual o raio do círculo?")
//
//     let resultado = b * a * a;
//   alert ("a área total do círculo é" + resultado)
//}; 

//function calcular(valorEmDolar){
//   let cotacaoDolar = 4.80; 
//   let valorEmReais = valorEmDolar * cotacaoDolar
 //  return valorEmReais.toFixed(2);
//}

//let valorEmDolar = 50;
//let valorEmReais = calcular(valorEmDolar);
//console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

//function mostrarTabuada(numero) {
//    for (let i = 1; i <= 10; i++) {
 //     let resultado = numero * i;
//      console.log(`${numero} x ${i} = ${resultado}`);
//    }
//  }
  
//  // Exemplo de uso
 // let numero = 7;
 // mostrarTabuada(numero);