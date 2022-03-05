import template from "./auth.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { validationValue } from "../../constants/validation";
import { getFormData } from "../../utils/getFormData";
import { createErrorMessage } from "../../utils/createErrorMessage";

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
          getFormData("my-auth-form");
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
          let re = validationValue.login.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.login.message);
          }
        },
        focus: () => {
          let error = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputpassword = new Input({
      label: "Password",
      events: {
        blur: (e) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: () => {
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
