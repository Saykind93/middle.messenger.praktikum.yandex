import ChatsAPI from "../api/ChatsAPI";
import { store } from "../utils/Store";

class ChatsController {
  private api: ChatsAPI;
  socket: WebSocket;
  data: any;
  constructor() {
    this.api = new ChatsAPI();
    this.socket = null;
  }

  async createChat(ChatData) {
    await this.api.createChat(ChatData);
    await this.fetchChats();
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
    if (this.socket) {
      this.socket.close();
      store.set("localChat", { chatId: Number(ChatData.chatId) });
    }

    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${ChatData.user_id}/${ChatData.chatId}/${token.token}`
    );

    this.socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      this.socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );

      this.socket.addEventListener("message", (event) => {
        this.data = {
          ...JSON.parse(event.data),
          chatId: ChatData.chatId,
        };

        store.set("localChat", JSON.parse(event.data));
      });
    });

    this.socket.addEventListener("error", (event) => {
      console.log("Ошибка", event.message);
    });

    await this.fetchChats();
  }

  async sendMessage(newMessage) {
    if (this.socket) {
      this.socket.send(
        JSON.stringify({
          content: newMessage.message,
          type: "message",
        })
      );
      this.socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );
    }
  }
}

export default new ChatsController();
