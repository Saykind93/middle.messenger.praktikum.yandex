import Block from "../../utils/Block";
import template from "./message.hbs";

interface MessageProps {
  user_id: number;
  content: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
    this.props = props;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
