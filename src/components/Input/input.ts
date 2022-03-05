import Block from "../../utils/Block";
import template from "./input.hbs";

interface InputProps {
  label: string;
  events?: {
    blur?: (e: Event) => void;
    focus?: (e: Event) => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
