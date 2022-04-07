import { withStore } from "../../utils/Store";
import { ChatsPage } from "./chats";

const withChats = withStore((state) => {
  return {
    propOne: state.localChat,
    propTwo: state.chatId,
    chatsStore: state.currentChats,
    userStore: state.currentUser,
    token: state.token
  };
});
export default withChats(ChatsPage);

