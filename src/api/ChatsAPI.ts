import BaseApi from "./BaseApi";

interface ChatDataInt {
  title: string;
}

export default class ChatsAPI extends BaseApi {
  constructor() {
    super("/chats");
  }

  async createChat(ChatData: ChatDataInt): Promise<unknown> {
    return await this.http.post("/", ChatData);
  }
  async addUser(ChatData: any): Promise<unknown> {
    return await this.http.put("/users", ChatData).catch((e) => console.log(e));
  }
  async deleteUser(ChatData: any): Promise<unknown> {
    return await this.http
      .delete("/users", ChatData)
      .catch((e) => console.log(e));
  }
  async getChat(ChatId: any): Promise<unknown> {
    return this.http.post("/token/" + ChatId);
  }

  readChats(): Promise<unknown> {
    return this.http.get("/");
  }
  update = undefined;
  delete = undefined;
  create = undefined;
  read = undefined;
}
