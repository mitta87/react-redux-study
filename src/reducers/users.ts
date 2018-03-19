import { UserAction } from "../actions";
import * as actions from "../constants/actions";
import { StoreState } from "../types/index";
import { initialData } from "../store";

export default (state: StoreState = initialData, action: UserAction) => {
  switch (action.type) {
    case actions.ADD_USER:
      return { ...state, newUser: { name: "", lastName: "" }, users: [...state.users, action.user] };
    case actions.CHANGE_NEW_USER:
      return { ...state, newUser: action.newUser };
    default: return state;
  }
};
