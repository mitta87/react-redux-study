import * as React from "react";
import UserCards from "./UserCards";
import AddUserForm from "./AddUserForm";
import { User } from "../types/index";


export interface UsersPanelProps {
  users: User[];
  newUser: User;
  onNewUserChanged: (user: User) => void;
  onNewUser: (user: User) => void;
}


const UsersPanel = (props: UsersPanelProps) => {
  return <div className="UsersPanel">
        <UserCards {...props} />
        <AddUserForm {...props} />
    </div>;
};

export default UsersPanel;
