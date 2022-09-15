let lista = [1, 2, 5]
let listaIncluir = [3, 4]

for (let i = 0; i < listaIncluir.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i])
      j++
    }
  }
}
console.log(lista)

// Forma resumida
const listResult = [1, 2, ...listaIncluir, 5]
console.log(listResult)

// Dizer que um é igual ao outro significa referência, e não cópia
let arr = ['a', 'b', 'c']
let arr2 = arr

arr2.push('d')

console.log(`arr = ${arr}`)
console.log(`arr2 = ${arr2}`)

// Para criar uma cópia
let array = ['a', 'b', 'c']
let array2 = [...array]

array2.push('d')

console.log(`array = ${array}`)
console.log(`array2 = ${array2}`)