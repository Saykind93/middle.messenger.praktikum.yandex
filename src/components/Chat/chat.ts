import Block from "../../utils/Block";
import template from "./chat.hbs";
import Button from "./../Button";
import Input from "../Input";
import { getFormData } from "../../utils/getFormData";
import ChatsController from "../../controller/ChatsController";

interface ChatProps {
  id: number;
  created_by: string;
  title: string;
  user_id: number;
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
    this.props = props;
  }

  protected initChildren(): void {
    this.children.getchatbutton = new Button({
      label: "Выбрать чат",
      events: {
        click: (e) => {
          e.preventDefault();
          let getChatButton: EventTarget | any = e.target;
          let buttonWrapeer = getChatButton.parentNode;
          ChatsController.getChat({
            chatId: Number(buttonWrapeer.dataset.id),
            user_id: this.props.user_id,
          });
        },
      },
    });

    this.children.inputadduser = new Input({
      label: "userID",
      events: {
        blur: () => {},
        focus: () => {},
      },
    });

    this.children.adduserbutton = new Button({
      label: "Добавить пользователя в чат",
      events: {
        click: (e) => {
          e.preventDefault();
          let addUserButton: EventTarget | any = e.target;
          let buttonWrapeer = addUserButton.parentNode;
          let data = getFormData("add-delete-user-form");
          ChatsController.addUser({
            chatId: Number(buttonWrapeer.dataset.id),
            users: [Number(data.userID)],
          });
        },
      },
    });
    this.children.deleteuserbutton = new Button({
      label: "Удалить пользователя из чата",
      events: {
        click: (e) => {
          e.preventDefault();
          let addUserButton: EventTarget | any = e.target;
          let buttonWrapeer = addUserButton.parentNode;
          let data = getFormData("add-delete-user-form");
          ChatsController.deleteUser({
            chatId: Number(buttonWrapeer.dataset.id),
            users: [Number(data.userID)],
          });
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
