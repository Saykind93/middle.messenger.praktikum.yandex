import template from "./auth.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";

import * as styles from "./auth.scss";

interface AuthPageProps {
  className: string;
}

export class AuthPage extends Block {
  constructor(props: AuthPageProps) {
    super({
      props,
    });
  }

  protected initChildren(): void {
    this.children.buttonenter = new Button({
      label: "Enter",
      textlink: "/pages/Chats/chats.html",
      events: {
        click: (e) => {
          e.preventDefault();
          const data = new FormData(document.getElementById("myauthform"));
          let new_obj: object = {};
          for (let iter of data.entries()) {
            new_obj[iter[0]] = iter[1];
          }
          console.log(new_obj);
          location.href = "/pages/Chats/chats.html";
        },
      },
    });

    this.children.buttonregistry = new Button({
      label: "Registration",
      textlink: "/pages/Registry/registry.html",
      events: {
        click: () => {
          location.href = "/pages/Registry/registry.html";
        },
      },
    });

    this.children.inputlogin = new Input({
      label: "Login",
      events: {
        blur: (e) => {
          let re = /^[a-zA-Z0-9_-]{3,20}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка логин, от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)."
            );
          }
        },
        focus: () => {},
      },
    });

    this.children.inputpassword = new Input({
      label: "Password",
      events: {
        blur: (e) => {
          let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка пароль, от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра."
            );
          }
        },
        focus: (e) => {},
      },
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}
