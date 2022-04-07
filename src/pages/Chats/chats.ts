import template from "./chats.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { getFormData } from "../../utils/getFormData";
import { createErrorMessage } from "../../utils/createErrorMessage";
import { validationValue } from "../../constants/validation";
import * as styles from "./chats.scss";
import ChatsController from "../../controller/ChatsController";
import AuthController from "../../controller/AuthController";
import Chat from "../../components/Chat";
import Message from "../../components/Message";
import Router from "../../utils/router";

export class ChatsPage extends Block {
  constructor(props) {
    super(props);
  }

  protected initChildren(): void {
    this.children.buttonnewchat = new Button({
      label: "Создать новый чат",
      events: {
        click: (e) => {
          e.preventDefault();
          let data = getFormData("newchat-id");
          ChatsController.createChat(data);
        },
      },
    });

    this.children.inputnewchat = new Input({
      label: "title",
    });

    this.children.mychat = [];

    if (this.props?.chatsStore) {
      Object.entries(this.props.chatsStore).map(([key, value]) => {
        this.children.mychat.push(
          new Chat({
            id: value.id,
            created_by: value.created_by,
            title: value.title,
            user_id: this.props.userStore.id,
          })
        );
      });
    }

    this.children.mymessage = [];

    if (this.props?.propOne) {
      Object.entries(this.props.propOne).map(([key, value]) => {
        this.children.mymessage.push(
          new Message({ user_id: value.user_id, content: value.content })
        );
      });
    }

    this.children.button = new Button({
      label: "Enter",
      textlink: "/pages/User/user.html",
      events: {
        click: (e) => {
          e.preventDefault();
          let newMessage = getFormData("message-form");
          ChatsController.sendMessage({
            ...newMessage,
            userId: this.props.userStore.id,
            chatId: this.props.propTwo,
            token: this.props.token,
          });
        },
      },
    });

    this.children.inputmessage = new Input({
      label: "message",
      events: {
        blur: (e) => {
          if (!e.target.value.length > 0) {
            createErrorMessage(e.target, validationValue.message.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.buttonlogout = new Button({
      label: "Logout",
      events: {
        click: (e) => {
          e.preventDefault();
          AuthController.logout();
        },
      },
    });

    this.children.buttonsettings = new Button({
      label: "User settings",
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router();
          router.go("/settings");
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      styles,
    });
  }
}
