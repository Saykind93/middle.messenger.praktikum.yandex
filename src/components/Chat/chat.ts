import Block from "../../utils/Block";
import template from "./chat.hbs";
import Button from "./../Button";
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
    this.children.adduserbutton = new Button({
      label: "Добавить пользователя в чат",
      events: {
        click: (e) => {
          e.preventDefault();
          let mybutton: EventTarget | any = e.target;
          let button_wrapeer = mybutton.parentNode;
          ChatsController.addUser({
            chatId: Number(button_wrapeer.dataset.id),
            users: [77],
          });
        },
      },
    });
    this.children.deleteuserbutton = new Button({
      label: "Удалить пользователя из чата",
      events: {
        click: (e) => {
          e.preventDefault();
          let mybutton: EventTarget | any = e.target;
          let button_wrapeer = mybutton.parentNode;
          ChatsController.deleteUser({
            chatId: Number(button_wrapeer.dataset.id),
            users: [77],
          });
        },
      },
    });

    this.children.getchatbutton = new Button({
      label: "Выбрать чат",
      events: {
        click: (e) => {
          e.preventDefault();
          let mybutton: EventTarget | any = e.target;
          let button_wrapeer = mybutton.parentNode;
          ChatsController.getChat({
            chatId: Number(button_wrapeer.dataset.id),
            user_id: this.props.user_id,
          });
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
