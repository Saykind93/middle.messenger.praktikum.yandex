import template from "./chats.hbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";

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
          const data: HTMLFormElement | null = new FormData(
            document.getElementById("mymessageform")
          );
          let new_obj: object = {};
          for (let iter of data.entries()) {
            new_obj[iter[0]] = iter[1];
          }
          console.log(new_obj);
          location.href = "/pages/User/user.html";
        },
      },
    });

    this.children.inputmessage = new Input({
      label: "message",
      events: {
        blur: (e) => {
          if (!e.target.value.length>0) {
            alert(
              "ошибка message, не должно быть пустым"
            );
          }
        },
        focus: (e) => {},
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
