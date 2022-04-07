import HTTPTransport from "../utils/HTTPTransport";
import { ChatDataInt, OneChatInt } from "../interfaces/interfaces";

export default class ChatsAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport("/chats");
  }

  async createChat(chatData: ChatDataInt): Promise<string> {
    return await this.http.post("/", chatData);
  }
  async addUser(chatData: any): Promise<string> {
    return await this.http.put("/users", chatData);
  }
  async deleteUser(chatData: any): Promise<string> {
    return await this.http.delete("/users", chatData);
  }
  async getChat(chatId: any): Promise<string> {
    return this.http.post("/token/" + chatId);
  }

  readChats(): Promise<OneChatInt> {
    return this.http.get("/");
  }
}
