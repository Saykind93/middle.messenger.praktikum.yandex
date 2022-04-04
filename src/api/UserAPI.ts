import BaseApi from "./BaseApi";

export interface UserData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export default class UserAPI extends BaseApi {
  constructor() {
    super("/user");
  }

  putProfile(data: UserData): Promise<unknown> {
    return this.http.put("/profile", data);
  }
  putProfileAvatar(data): Promise<unknown> {
    return this.http.put("/profile/avatar", data, "file").then((data) => {
      return data;
    });
  }

  putPassword(data: UserPassword): Promise<unknown> {
    return this.http.put("/password", data);
  }
  update = undefined;
  delete = undefined;
  create = undefined;
  read = undefined;
}
