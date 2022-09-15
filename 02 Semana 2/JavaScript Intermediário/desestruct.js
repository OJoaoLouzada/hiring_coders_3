const pessoa = {
  nome: 'JP',
  sobrenome: 'Louzada',
  idade: 31,
  profissao: 'Programador'
}

console.log(pessoa)

// Como fazia antes
/*
let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade
let profissao = pessoa.profissao
*/

// Como fazer agora
let {nome, sobrenome, idade, profissao} = pessoa

console.log(nome, sobrenome, idade, profissao)