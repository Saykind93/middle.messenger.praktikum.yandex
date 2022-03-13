import template from "./chats.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { getFormData } from "../../utils/getFormData";
import { createErrorMessage } from "../../utils/createErrorMessage";
import { validationValue } from "../../constants/validation";
import * as styles from "./chats.scss"


interface ChatsPageProps {
  className: string
}


export class ChatsPage extends Block {
  constructor(props: ChatsPageProps) {
    super({
      props
    });
  }

  protected initChildren(): void {
  
    this.children.button = new Button({
      label: "Enter",
      textlink: "/pages/User/user.html",
      events: {
        click: (e) => {
          e.preventDefault();
          getFormData("message-form");
          location.href = "/pages/User/user.html";
        },
      },
    });

    this.children.inputmessage = new Input({
      label: "message",
      events: {
        blur: (e) => {
          if (!e.target.value.length>0) {
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



  }

  // componentDidUpdate(oldProps: any, newProps: any): boolean {

  //   if()
  //     return super.componentDidUpdate(oldProps, newProps)
  // }

  render() {
    return this.compile(template, {styles});
  }
}
