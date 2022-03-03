import { renderDom } from "./../../utils/renderDom";
import Error5Page from './../Error5/error5'


document.addEventListener('DOMContentLoaded', ()=>{
  const error5Page = new Error5Page()

  renderDom('#apperror5', error5Page)


})
