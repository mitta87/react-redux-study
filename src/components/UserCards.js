import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

export default class UserCardsContainer extends React.Component {


    constructor() {
        super();
    }

    mapUser(user, index) {
        return <UserCard {...user} key={index}/>
    }

    render() {
        return <ul className="UserCardsContainer">
            {this.props.users.map(this.mapUser)}
        </ul>
    }
}
UserCardsContainer.propTypes = {
    users: PropTypes.array
};