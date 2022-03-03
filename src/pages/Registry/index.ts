import { renderDom } from "./../../utils/renderDom";
import RegistryPage from './../Registry/registry'


document.addEventListener('DOMContentLoaded', ()=>{
  const registryPage = new RegistryPage()

  renderDom('#appregistry', registryPage)


})
