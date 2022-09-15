// Quando a função não tem retorno explícito, ela retorna undefined (void)

function principal() {
  console.log('executando')
}

principal()

// Quando a função entra em looping infinito, ela nunca retorna nada. Ou quando ela dispara um erro (never)

function funcaoQueNuncaRetorna() {
  throw new Error('Erro!')
  //while(true) {

  //}
}

funcaoQueNuncaRetorna()