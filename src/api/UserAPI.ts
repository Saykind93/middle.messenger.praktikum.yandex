import HTTPTransport from "../utils/HTTPTransport";
import { UserData, UserPassword, MyUserInt } from "../interfaces/interfaces";

export default class UserAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport("/user");
  }

  putProfile(data: UserData): Promise<MyUserInt> {
    return this.http.put("/profile", data);
  }
  putProfileAvatar(data): Promise<MyUserInt | void> {
    return this.http.put("/profile/avatar", data, "multipart/form-data").then((data) => {
      return data;
    });
  }

  putPassword(data: UserPassword): Promise<string> {
    return this.http.put("/password", data);
  }
}
