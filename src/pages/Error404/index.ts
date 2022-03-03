import { renderDom } from "./../../utils/renderDom";
import Error404Page from './../Error404/error404'


document.addEventListener('DOMContentLoaded', ()=>{
  const error404Page = new Error404Page()

  renderDom('#apperror404', error404Page)


})
