import BaseApi from "./BaseApi";

export interface RegistryData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface AuthData {
  login: string;
  password: string;
}

export default class AuthAPI extends BaseApi {
  constructor() {
    super("/auth");
  }
  signUp(data: RegistryData): Promise<unknown> {
    return this.http.post('/signup', data)
  }
  login(data: AuthData): Promise<unknown> {
    return this.http.post('/signin', data)
  }
  logout(): Promise<unknown>{
    return this.http.post('/logout')
  }

  read(): Promise<unknown> {
    return this.http.get('/user')
  }
  update = undefined;
  delete = undefined;
  create = undefined
}
