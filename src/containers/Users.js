import { connect } from "react-redux";
import { addUser, onNewUserChanged } from "../actions";
import UsersPanel from "../components/UsersPanel";

export default connect(
  state => ({
    users: state.users,
    newUser: state.newUser
  }),
  dispatch => ({
    onNewUser(user) {
      dispatch(addUser(user));
    },
    onNewUserChanged(newUser) {
      dispatch(onNewUserChanged(newUser));
    }
  }),
)(UsersPanel);

