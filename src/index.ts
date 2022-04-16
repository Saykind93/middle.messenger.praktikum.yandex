import AuthPage from "./pages/Auth";
import RegistryPage from "./pages/Registry/registry";
import Error5Page from "./pages/Error5/error5";
import Error404Page from "./pages/Error404/error404";
import Router from "./utils/router";
import UserPage from "./pages/User";
import ChatsPage from "./pages/Chats";
import AuthController from "./controller/AuthController";
import ChatsController from "./controller/ChatsController";

document.addEventListener("DOMContentLoaded", async () => {
  const router = new Router("app");
  router
    .use("/", AuthPage, {})
    .use("/sign-up", RegistryPage, {})
    .use("/messenger", ChatsPage, {})
    .use("/settings", UserPage, {})
    .use("/error5", Error5Page, {})
    .use("* ", Error404Page, {})
    .start()

  try {
    await AuthController.fetchUser();
    await ChatsController.fetchChats();
    router.go("/messenger");
  } catch (er) {
    console.log(er);
  }
});
