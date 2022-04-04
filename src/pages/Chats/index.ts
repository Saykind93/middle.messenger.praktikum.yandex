import { withStore } from "../../utils/store";
import { ChatsPage } from "./chats";

const withChats = withStore((state) => {
  return {
    propOne: state.localChat,
    propTwo: state.chatId,
    chatsStore: state.currentChats,
    userStore: state.currentUser,
  };
});
export default withChats(ChatsPage);

