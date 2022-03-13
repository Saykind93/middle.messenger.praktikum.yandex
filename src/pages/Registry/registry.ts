import template from "./registry.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";
import Input from "../../components/Input";
import { getFormData } from "../../utils/getFormData";
import { validationValue } from "../../constants/validation";
import { createErrorMessage } from "../../utils/createErrorMessage";

import * as styles from "./registry.scss";

interface RegistryPageProps {
  className: string;
}

export default class RegistryPage extends Block {
  constructor(props: RegistryPageProps) {
    super({
      props,
    });
  }

  protected initChildren(): void {
    this.children.button = new Button({
      label: "Registration",
      textlink: "/pages/Chats/chats.html",
      events: {
        click: (e) => {
          e.preventDefault();
          getFormData("registry-form");
          location.href = "/pages/Error5/error5.html";
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

    this.children.inputpassword = new Input({
      label: "password",
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
  }

  render() {
    return this.compile(template, { styles });
  }
}
