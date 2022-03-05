import template from "./error5.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";

import * as styles from "./error5.scss";

interface Error5PageProps {
  className: string;
}

export default class Error5Page extends Block {
  constructor(props: Error5PageProps) {
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
          location.href = "/pages/Error404/error404.html";
        },
      },
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}
