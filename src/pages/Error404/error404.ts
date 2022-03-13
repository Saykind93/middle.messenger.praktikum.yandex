import template from "./error404.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";

import * as styles from "./error404.scss";

interface Error404PageProps {
  className: string;
}

export default class Error404Page extends Block {
  constructor(props: Error404PageProps) {
    super({
      props,
    });
  }

  protected initChildren(): void {
    this.children.button = new Button({
      label: "Назад к чатам",
      events: {
        click: (e) => {
          e.preventDefault();
          location.href = "/pages/Chats/chats.html";
        },
      },
    });
  }
  render() {
    return this.compile(template, { styles });
  }
}
