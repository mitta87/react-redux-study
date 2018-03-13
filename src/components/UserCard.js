import React from "react";

export default class UserCard extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {name, lastName} = this.props;
        return <li className="UserCard">
            {name} {lastName}
        </li>
    }
}