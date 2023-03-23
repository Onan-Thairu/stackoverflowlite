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

export interface loggedInUser {
  id: string
  username: string
  email: string
  isAdmin: string
}

export interface loggedInUser2 {
  user?: User[];
  is_admin?: string;
  id: string;
  username: string;
  email: string;
  token : string;
}