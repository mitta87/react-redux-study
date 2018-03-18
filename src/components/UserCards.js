import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";


const mapUser = (user, index) => <UserCard {...user} key={index} />;

const UserCardsContainer = ({ users }) => (
  <ul className="UserCardsContainer">
    {users.map(mapUser)}
  </ul>
);

export default UserCardsContainer;

UserCardsContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};
