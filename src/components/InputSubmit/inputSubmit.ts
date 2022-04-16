import Block from "../../utils/Block";
import template from "./inputSubmit.hbs";

interface InputSubmitProps {
  events?: {
    click?: (e: Event) => void;
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
