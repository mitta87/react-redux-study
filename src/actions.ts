import * as actions from "./constants/actions";
import { User } from "./types/index";

export interface AddUser {
  type: actions.ADD_USER;
  user: User;
}

export interface onNewUserChanged {
  type: actions.CHANGE_NEW_USER;
  newUser: User;
}

export type UserAction = AddUser | onNewUserChanged;

export const addUser = (user: User) => ({
  user,
  type: actions.ADD_USER
});

export const onNewUserChanged = (newUser: User) => ({
  newUser,
  type: actions.CHANGE_NEW_USER
});
