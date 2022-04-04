import Block from "../../utils/Block";
import template from "./inputSubmit.hbs";

interface InputSubmitProps {
  events?: {
    blur?: (e: Event | any) => any;
    focus?: (e: Event | any) => any;
  };
}

export class InputSubmit extends Block {
  constructor(props: InputSubmitProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
