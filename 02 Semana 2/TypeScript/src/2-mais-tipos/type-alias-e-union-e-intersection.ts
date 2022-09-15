// ALIAS

type User = {
  name: string
  lastName: string
  birthday: string
  age?: number // o ? faz a propriedade ser opcional
}

const joao: User = {
  name: 'João',
  lastName: 'Louzada',
  birthday: '13/12/1990'

}

// UNION (como se fosse || aplicado ao type do objeto)

type logLevel = 'info' | 'error' | 'debug'

function logMessage(message: string, level: logLevel) {
  console.log(`[${level}] - ${message}`)
}

logMessage('Mensagem', 'info')

// INTERSECTION (como se fosse && aplicado ao type do objeto)

type About = {
  bio: string
  interests: string[]
}

type Profile = User & About

const userWithProfile: Profile = {
  name: 'João',
  lastName: 'Louzada',
  birthday: '13/12/1990',
  bio: 'Olá, eu sou o João',
  interests: ['Programação', 'Tecnologia']
}

// Pode misturar UNION e INTERSECTION

type composedProfile = User & {
  log: logLevel
}