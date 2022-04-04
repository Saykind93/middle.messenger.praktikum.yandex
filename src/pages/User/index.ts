import { withStore } from "../../utils/store";
import { renderDom } from "./../../utils/renderDom";
// export {UserPage as default} from './user'
import { UserPage } from "./user";


const withUser = withStore(state=> ({...state.currentUser}))
export default withUser(UserPage)
