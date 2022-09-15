function soma(x, y){
  return x + y
}

console.log(soma(3, 4))

const multiplicacao = function(x, y) {
  return x * y
}

console.log(multiplicacao(3, 4))

// Arrow function simplifica a função de cima
const dividir = (x, y) => {
  return x / y
}

console.log(dividir(18, 6))

// Arrow function que retorna objeto tem que encapsular com parênteses
const objeto = () => ({ nome: 'JP', sobrenome: 'Louzada' })