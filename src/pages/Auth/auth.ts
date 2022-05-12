import template from "./auth.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { validationValue } from "../../constants/validation";
import { getFormData } from "../../utils/getFormData";
import { createErrorMessage } from "../../utils/createErrorMessage";

import * as styles from "./auth.module.scss";
import AuthController from "../../controller/AuthController";
import Router from "../../utils/router";

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
      events: {
        click: (e) => {
          e.preventDefault();
          let data = getFormData("my-auth-form");
          AuthController.login(data);
        },
      },
    });

    this.children.buttonregistry = new Button({
      label: "Registration",
      events: {
        click: () => {
          const router = new Router();
          router.go('/sign-up')
        },
      },
    });

    this.children.inputlogin = new Input({
      label: "login",
      events: {
        blur: (e:any) => {
          let re = validationValue.login.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.login.message);
          }
        },
        focus: () => {
          let error: any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputpassword = new Input({
      label: "password",
      events: {
        blur: (e:any) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: () => {
          let error: any = document.getElementById("error");
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
