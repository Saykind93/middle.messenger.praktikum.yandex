import { isEqual } from "./helpers";

function render(query, block) {
  
  const root = document.getElementById(query);
 // root.textContent = block.getContent();
  root.appendChild(block.getContent())
  return root;
}



export default class Route {
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
          this._block = new this._blockClass();
          render(this._props.rootQuery, this._block);
          return;
      }

      this._block.show();
  }
}


// export default class Route {
//   constructor(pathname, view, props) {
//       this._pathname = pathname;
//       this._blockClass = view;
//       this._block = null;
//       this._props = props;
//   }

//   navigate(pathname) {
//       if (this.match(pathname)) {
//           this._pathname = pathname;
//           this.render();
//       }
//   }

//   leave() {
//       if (this._block) {
//           this._block.hide();
//       }
//   }

//   match(pathname) {
//       return isEqual(pathname, this._pathname);
//   }

//   render() {
//       if (!this._block) {
        
//           this._block = new this._blockClass();
//           this._block.initChildren()
//           render(this._props.rootQuery, this._block);
//           return;
//       }
      
//       this._block.initChildren()
//       this._block.render();
//   }
// }
