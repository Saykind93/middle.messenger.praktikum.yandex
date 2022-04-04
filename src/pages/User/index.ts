import { withStore } from "../../utils/Store";
import { UserPage } from "./user";


const withUser = withStore(state=> ({...state.currentUser}))
export default withUser(UserPage)
