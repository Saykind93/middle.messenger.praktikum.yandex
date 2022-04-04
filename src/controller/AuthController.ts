import AuthAPI from "../api/AuthAPI";
import Router from "../utils/router";
import store from "../utils/store";

class AuthController {
  constructor() {
    this.api = new AuthAPI();
  }
  async signUp(RegistryData) {
    const response = await this.api.signUp(RegistryData);
    if (response.reason) {
      throw new Error(response.reason);
    }
    await this.fetchUser()
    const router = new Router()
    router.go('/messenger')
  }

  async login(AuthData) {
    await this.api.login(AuthData);
    const router = new Router();
    router.go("/messenger");
  }
  async logout() {
    await this.api.logout();
    const router = new Router();
    router.go("/");
  }
  async fetchUser() {
    const user = await this.api.read();
    store.set("currentUser", user);
  }
}

export default new AuthController();
