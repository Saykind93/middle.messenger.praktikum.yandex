import template from "./user.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";
import Input from "../../components/Input";
import { getFormData } from "../../utils/getFormData";
import { validationValue } from "../../constants/validation";
import { createErrorMessage } from "../../utils/createErrorMessage";

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
      label: "Изменить аватар",
      events: {
        click: (e) => {
          e.preventDefault();
          getFormData("change-avatar-form");
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
          getFormData("change-registry-form");
        },
      },
    });

    this.children.inputfirstname = new Input({
      label: "first_name",
      events: {
        blur: (e) => {
          let re = validationValue.first_name.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.first_name.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputsecondname = new Input({
      label: "second_name",
      events: {
        blur: (e) => {
          let re = validationValue.second_name.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.second_name.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputlogin = new Input({
      label: "login",
      events: {
        blur: (e) => {
          let re = validationValue.login.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.login.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });
    this.children.inputemail = new Input({
      label: "email",
      events: {
        blur: (e) => {
          let re = validationValue.email.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.email.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
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
          let re = validationValue.phone.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.phone.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });
    this.children.buttonchangepassword = new Button({
      label: "Изменить пароль",
      events: {
        click: (e) => {
          e.preventDefault();
          getFormData("change-password-form");
          location.href = "/pages/Chats/chats.html";
        },
      },
    });
    this.children.inputoldpassword = new Input({
      label: "oldpassword",
      events: {
        blur: (e) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputnewpassword = new Input({
      label: "newpassword",
      events: {
        blur: (e) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: (e) => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}
