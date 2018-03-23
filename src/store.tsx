import reduxThunk from "redux-thunk";
import users from "./reducers/users";
import { createStore, applyMiddleware } from "redux";
import { StoreState } from "./types/index";

export const initialData: StoreState = {
  newUser: {
    name: "",
    lastName: ""
  },
  users: []
};

export default createStore<StoreState>(users, initialData, applyMiddleware(reduxThunk));
