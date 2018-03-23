import * as actions from "./constants/actions";
import {StoreState, User} from "./types/index";
import * as Urls from "./constants/Urls";
import {Dispatch} from "redux";

export interface AddUser {
  type: actions.ADD_USER;
  user: User;
}

export interface onNewUserChanged {
  type: actions.CHANGE_NEW_USER;
  newUser: User;
}

export interface OnReceiveUsers {
  type: actions.RECEIVE_USERS;
  users: User[];
}

export type UserAction = AddUser | onNewUserChanged | OnReceiveUsers;

export const addUser = (user: User) => ({
  user,
  type: actions.ADD_USER
});

export const onNewUserChanged = (newUser: User) => ({
  newUser,
  type: actions.CHANGE_NEW_USER
});

const receiveUsers = (users: User[]) => ({
  users,
  type: actions.RECEIVE_USERS
});

export const loadUsers = () => {
  return (dispatch: Dispatch<StoreState>) => {
    return fetch(Urls.LOAD_USERS)
          .then(response => response.json())
          .then(json => dispatch(receiveUsers(json)));
  };
};
