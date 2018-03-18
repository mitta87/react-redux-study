import React from "react";
import UserCards from "./UserCards";
import AddUserForm from "./AddUserForm";


const UsersPanel = () => (
  <div className="UsersPanel">
    <UserCards {...this.props} />
    <AddUserForm {...this.props} />
  </div>
);

export default UsersPanel;
