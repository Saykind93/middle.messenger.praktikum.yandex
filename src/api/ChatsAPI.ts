import HTTPTransport from "../utils/HTTPTransport";
import { ChatDataInt, OneChatInt, ChatAddUser, DeleteUserInt } from "../interfaces/interfaces";

export default class ChatsAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport("/chats");
  }

  async createChat(chatData: ChatDataInt): Promise<string> {
    return await this.http.post("/", chatData);
  }
  async addUser(chatData: ChatAddUser): Promise<string> {
    return await this.http.put("/users", chatData);
  }
  async deleteUser(chatData: DeleteUserInt): Promise<string> {
    return await this.http.delete("/users", chatData);
  }
  async getChat(chatId: number): Promise<string> {
    return this.http.post("/token/" + chatId);
  }

  readChats(): Promise<OneChatInt> {
    return this.http.get("/");
  }
}
