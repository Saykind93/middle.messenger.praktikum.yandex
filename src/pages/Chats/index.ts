export {ChatsPage as default } from './chats'

import { renderDom } from "./../../utils/renderDom";
import ChatsPage from './../Chats'


document.addEventListener('DOMContentLoaded', ()=>{
  const chatsPage = new ChatsPage()

  renderDom('#appchats', chatsPage)


})
