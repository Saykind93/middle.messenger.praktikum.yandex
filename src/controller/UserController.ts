import UserAPI from "../api/UserAPI";
import store from "../utils/Store";

class UserController {
  constructor() {
    this.api = new UserAPI();
  }

  async putProfile(UserData) {
    await this.api.putProfile(UserData);
  }

  async putProfileAvatar(UserData) {
    const newUser = await this.api.putProfileAvatar(UserData);
    store.set("currentUser", newUser);
  }
  async putPassword(UserData) {
    await this.api.putPassword(UserData);
  }
}

export default new UserController();
