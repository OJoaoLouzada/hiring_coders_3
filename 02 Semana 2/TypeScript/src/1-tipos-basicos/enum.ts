enum Permissoes {
  admin = 'ADMIN',
  editor = 'EDITOR',
  comum = 'COMUM'
}

enum Cores {
  red = '#ff0000',
  black = '#000'
}

const usuario = {
  nivel: Permissoes.admin
}

console.log(usuario)

console.log(Cores)