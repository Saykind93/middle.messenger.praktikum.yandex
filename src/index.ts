import { Button } from "./components/Button/button";
import { renderDom } from "./utils/renderDom";
import AuthPage from './pages/Auth'



document.addEventListener('DOMContentLoaded', ()=>{
  const authPage = new AuthPage()

  renderDom('#app', authPage)


})
