import React from "react";
import UserCards from "./UserCards";
import AddUserForm from "./AddUserForm";

export default class UsersPanel extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div className="UsersPanel">
            <UserCards {...this.props}/>
            <AddUserForm {...this.props}/>
        </div>;
    }

}