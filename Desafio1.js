const readline = require('readline');
function somatoriosMultiplos (numeros){ 

    let soma = 0
    for(let i = 3; i < numeros; i++ ){
        if( i % 3===0 || i % 5===0) {
            soma +=i
        }     
    }
    return soma
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira um número: ', (input) => {
  let numero = parseInt(input);

  if (!isNaN(numero)) {
    console.log(somatoriosMultiplos(numero))
  } else {
    console.log("Entrada inválida. Por favor, insira um número.");
  }

  rl.close();
});
