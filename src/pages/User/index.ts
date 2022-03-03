import { renderDom } from "./../../utils/renderDom";
import UserPage from './../User/user'


document.addEventListener('DOMContentLoaded', ()=>{
  const userPage = new UserPage()

  renderDom('#appuser', userPage)


})
