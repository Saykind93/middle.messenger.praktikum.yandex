import template from "./error5.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";

import * as styles from "./error5.scss";
import Router from "../../utils/router";

export default class Error5Page extends Block {
  protected initChildren(): void {
    this.children.button = new Button({
      label: "Назад к чатам",
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
    return this.compile(template, { styles });
  }
}
