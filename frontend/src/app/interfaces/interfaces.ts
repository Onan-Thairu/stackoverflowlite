export interface User {
  username: string
  email: string
  password: string
}

export interface registerSuccess {
  token: string
}

export interface logUser {
  email: string
  password: string
}

export interface loginSuccess {
  token: string
  user: any
}