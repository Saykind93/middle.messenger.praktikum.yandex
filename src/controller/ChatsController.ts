import ChatsAPI from "../api/ChatsAPI";
import { store } from "../utils/Store";

class ChatsController {
  constructor() {
    this.api = new ChatsAPI();
  }

  async createChat(ChatData) {
    await this.api.createChat(ChatData);
  }

  async fetchChats() {
    const chats = await this.api.readChats();
    store.set("currentChats", chats);
  }

  async addUser(ChatData) {
    await this.api.addUser(ChatData);
  }

  async deleteUser(ChatData) {
    await this.api.deleteUser(ChatData);
  }

  async getChat(ChatData) {
    const token = await this.api.getChat(ChatData.chatId);
    store.set("chatId", Number(ChatData.chatId));
    store.set("token", token);
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${ChatData.user_id}/${ChatData.chatId}/${token.token}`
    );
    socket.addEventListener("open", () => {
      console.log("Соединение установлено");

      socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );

      socket.addEventListener("message", (event) => {
        if (event.data) {
          store.set("localChat", {
            ...JSON.parse(event.data),
            chatId: ChatData.chatId,
          });
        }
      });
    });

    socket.addEventListener("error", (event) => {
      console.log("Ошибка", event.message);
    });
  }

  async sendMessage(newMessage) {
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${newMessage.userId}/${newMessage.chatId}/${newMessage.token.token}`
    );
    socket.addEventListener("open", () => {
      console.log("Соединение установлено");

      socket.send(
        JSON.stringify({
          content: newMessage.message,
          type: "message",
        })
      );
      socket.addEventListener("message", (event) => {
        store.set("localChat", {
          ...JSON.parse(event.data),
          chatId: newMessage.chatId,
        });
      });
    });
  }
}

export default new ChatsController();
