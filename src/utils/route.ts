import { isEqual } from "./isEqual";
import { render } from "./render";

export default class Route {
  _pathname: string;
  _blockClass: any;
  _block: any;
  _props: any;

  constructor(pathname:string, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = undefined;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._block);
      return;
    }
    this._block.show();
  }
}
