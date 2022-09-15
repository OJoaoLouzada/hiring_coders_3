let estaAtivo: boolean

// ...

estaAtivo = true

function mapearStatus(status: boolean) {
  if (status) {
    return `Está ativo!`
  } else {
    return `Não está ativo!`
  }
}

mapearStatus(true)