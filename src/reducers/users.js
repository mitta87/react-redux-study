import C from "../constants";

export default (state, action) => {
  switch (action.type) {
    case C.ADD_USER:
      return { ...state, newUser: { name: "", lastName: "" }, users: [...state.users, action.user] };
    case C.CHANGE_NEW_USER:
      return { ...state, newUser: action.newUser };
    default: return state;
  }
};
