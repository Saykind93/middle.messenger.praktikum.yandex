import template from "./user.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";
import Input from "../../components/Input";
import { getFormData } from "../../utils/getFormData";
import { validationValue } from "../../constants/validation";
import { createErrorMessage } from "../../utils/createErrorMessage";
import Router from "../../utils/router";

import * as styles from "./user.module.scss";
import UserController from "../../controller/UserController";
import InputSubmit from "../../components/InputSubmit";

export class UserPage extends Block {
  constructor(props) {
    super(props);
  }

  protected initChildren(): void {
    this.children.button = new Button({
      label: "Enter",
      textlink: "/pages/Error5/error5.html",
    });

    this.children.buttonavatar = new InputSubmit({
      events: {
        click: (e) => {
          e.preventDefault();
          const inputFile: any = document.getElementById("avatar");
          const formData: any = new FormData();
          formData.append("avatar", inputFile.files[0]);
          UserController.putProfileAvatar(formData);
        },
      },
    });

    this.children.button = new Button({
      label: "Registration",
      events: {
        click: (e) => {
          e.preventDefault();
          let data = getFormData("change-registry-form");
          UserController.putProfile(data);
        },
      },
    });

    this.children.inputfirstname = new Input({
      label: "first_name",
      textValue: this.props?.first_name,
      events: {
        blur: (e: any) => {
          let re = validationValue.first_name.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.first_name.message);
          }
        },
        focus: (e) => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputsecondname = new Input({
      label: "second_name",
      textValue: this.props?.second_name,
      events: {
        blur: (e: any) => {
          let re = validationValue.second_name.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.second_name.message);
          }
        },
        focus: () => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputlogin = new Input({
      label: "login",
      textValue: this.props?.login,
      events: {
        blur: (e: any) => {
          let re = validationValue.login.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.login.message);
          }
        },
        focus: (e) => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });
    this.children.inputemail = new Input({
      label: "email",
      textValue: this.props?.email,
      events: {
        blur: (e: any) => {
          let re = validationValue.email.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.email.message);
          }
        },
        focus: () => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputdisplayname = new Input({
      label: "display_name",
      textValue: this.props?.display_name,
      events: {
        blur: (e) => {},
        focus: (e) => {},
      },
    });

    this.children.inputphone = new Input({
      label: "phone",
      textValue: this.props?.phone,
      events: {
        blur: (e: any) => {
          let re = validationValue.phone.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.phone.message);
          }
        },
        focus: () => {
          let error: HTMLElement | any = document.getElementById("error");
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
          let data = getFormData("change-password-form");
          UserController.putPassword(data);
        },
      },
    });
    this.children.inputoldpassword = new Input({
      label: "oldPassword",
      events: {
        blur: (e: any) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: () => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.inputnewpassword = new Input({
      label: "newPassword",
      events: {
        blur: (e: any) => {
          let re = validationValue.password.re;
          if (!re.test(e.target.value)) {
            createErrorMessage(e.target, validationValue.password.message);
          }
        },
        focus: (e) => {
          let error: HTMLElement | any = document.getElementById("error");
          error.style.display = "none";
          error.innerText = "";
        },
      },
    });

    this.children.tochatsbutton = new Button({
      label: "Обратно к чатам",
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router();
          router.go("/messenger");
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      styles,
      props: {
        avatar: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`,
        isAvatar: this.props.avatar,
      },
    });
  }
}
