import { isEqual } from "./isEqual";
import { render } from "./render";

export default class Route {
  _pathname: any;
  _blockClass: any;
  _block: any;
  _props: any;

  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
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
    return isEqual(pathname, this._pathname);
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
