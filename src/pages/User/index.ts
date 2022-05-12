import { withStore } from "../../utils/Store";
import { UserPage } from "./user";

const withUser = withStore((state: any) => ({ ...state.currentUser }));
export default withUser(UserPage);
