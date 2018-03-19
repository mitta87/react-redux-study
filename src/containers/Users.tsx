import { connect } from "react-redux";
import { addUser, onNewUserChanged } from "../actions";
import UsersPanel from "../components/UsersPanel";
import { StoreState, User } from "../types/index";


export default connect(
    (state: StoreState) => {
      console.log("connect", state);
      return {
        users: state.users,
        newUser: state.newUser
      };
    },
    dispatch => ({
      onNewUser(user: User) {
        dispatch(addUser(user));
      },
      onNewUserChanged(newUser: User) {
        dispatch(onNewUserChanged(newUser));
      }
    })
)(UsersPanel);

