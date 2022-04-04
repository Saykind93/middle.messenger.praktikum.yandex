import Block from "../../utils/Block";
import template from "./input.hbs";

interface InputProps {
  label: string;
  textValue?: string;
  events?: {
    blur?: (e: Event | any) => void;
    focus?: (e: Event | any) => void;
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
