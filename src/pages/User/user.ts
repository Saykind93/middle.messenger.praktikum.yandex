import template from "./user.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";
import Input from "../../components/Input";

import * as styles from "./user.scss";

interface UserPageProps {
  className: string;
}

export default class UserPage extends Block {
  constructor(props: UserPageProps) {
    super({
      props,
    });
  }

  protected initChildren(): void {
    this.children.button = new Button({
      label: "Enter",
      textlink: "/pages/Error5/error5.html",
    });

    this.children.buttonavatar = new Button({
      label: "Изменить пароль",
      events: {
        click: (e) => {
          e.preventDefault();
          const data: HTMLFormElement | null = new FormData(
            document.getElementById("formchangeavatar")
          );
          let new_obj: object = {};
          for (let iter of data.entries()) {
            new_obj[iter[0]] = iter[1];
          }
          console.log(new_obj);
        },
      },
    });

    this.children.inputavatar = new Input({
      label: "avatar",
      events: {
        blur: (e) => {},
        focus: (e) => {},
      },
    });

    ///

    this.children.button = new Button({
      label: "Registration",
      events: {
        click: (e) => {
          e.preventDefault();
          const data: HTMLFormElement | null = new FormData(
            document.getElementById("changeregistryform")
          );
          let new_obj: object = {};
          for (let iter of data.entries()) {
            new_obj[iter[0]] = iter[1];
          }
          console.log(new_obj);
        },
      },
    });

    this.children.inputfirstname = new Input({
      label: "first_name",
      events: {
        blur: (e) => {
          let re = /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка first_name, латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)."
            );
          }
        },
        focus: (e) => {},
      },
    });

    this.children.inputsecondname = new Input({
      label: "second_name",
      events: {
        blur: (e) => {
          let re = /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка second_name, латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)."
            );
          }
        },
        focus: (e) => {},
      },
    });

    this.children.inputlogin = new Input({
      label: "login",
      events: {
        blur: (e) => {
          let re = /^[a-zA-Z0-9_-]{3,20}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка логин, от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)."
            );
          }
        },
        focus: (e) => {},
      },
    });
    this.children.inputemail = new Input({
      label: "email",
      events: {
        blur: (e) => {
          let re = /^[a-zA-Z0-9_-]+[@][a-zA-Z]+[.][a-zA-Z]+/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка email, латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы."
            );
          }
        },
        focus: (e) => {},
      },
    });

    this.children.inputdisplayname = new Input({
      label: "display_name",
      events: {
        blur: (e) => {},
        focus: (e) => {},
      },
    });

    this.children.inputphone = new Input({
      label: "phone",
      events: {
        blur: (e) => {
          let re = /^([+]{1})?[0-9]{10,15}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка телефон, от 10 до 15 символов, состоит из цифр, может начинается с плюса."
            );
          }
        },
        focus: (e) => {},
      },
    });

    this.children.buttonchangepassword = new Button({
      label: "Изменить пароль",
      events: {
        click: (e) => {
          e.preventDefault();
          const data: HTMLFormElement | null = new FormData(
            document.getElementById("changepasswordform")
          );
          let new_obj: object = {};
          for (let iter of data.entries()) {
            new_obj[iter[0]] = iter[1];
          }

          location.href = "/pages/Chats/chats.html";
          console.log(new_obj);
        },
      },
    });

    this.children.inputoldpassword = new Input({
      label: "oldpassword",
      events: {
        blur: (e) => {
          let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка старый пароль, от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра."
            );
          }
        },
        focus: (e) => {},
      },
    });

    this.children.inputnewpassword = new Input({
      label: "newpassword",
      events: {
        blur: (e) => {
          let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          if (!re.test(e.target.value)) {
            alert(
              "ошибка новый пароль, от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра."
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
