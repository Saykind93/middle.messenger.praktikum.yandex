import HTTPTransport from "../utils/HTTPTransport";
import { RegistryData, AuthData, GetUserInt } from "../interfaces/interfaces";


export default class AuthAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport("/auth");
  }
  signUp(data: RegistryData): Promise<string | number> {
    return this.http.post("/signup", data);
  }
  login(data: AuthData): Promise<string> {
    return this.http.post("/signin", data);
  }
  logout(): Promise<unknown> {
    return this.http.post("/logout");
  }

  read(): Promise<GetUserInt> {
    return this.http.get("/user");
  }
}
