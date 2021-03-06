import template from "./error404.hbs";
import Button from "../../components/Button";
import Block from "../../utils/Block";

import * as styles from "./error404.scss";
import Router from "../../utils/router";

export default class Error404Page extends Block {
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
