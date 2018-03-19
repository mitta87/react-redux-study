import users from "./reducers/users";
import { createStore } from "redux";
import { StoreState } from "./types/index";

export const initialData: StoreState = {
  newUser: {
    name: "",
    lastName: ""
  },
  users: []
};

export default createStore<StoreState>(users, initialData);
