import EventBus from "./EventBus";
import { isEqual } from "./isEqual";
import { set } from "./helpers";
import Block from "./Block";

type Indexed<T = any> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = "updated",
}

interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

interface Chats {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

interface StoreData {
  currentUser?: User;
  currentChats?: Chats;
  chatId?: number;
  token?: any;
  localChat?: any;
}

export class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: keyof StoreData, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export const withStore =
  (
    mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>
  ) =>
  (Component: typeof Block) => {
    let state: Record<string, unknown>;
    return class extends Component {
      constructor(props: any) {
        state = mapStateToProps(store.getState());
        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
            state = newState;
          }
        });
      }
    };
  };

export { store };
