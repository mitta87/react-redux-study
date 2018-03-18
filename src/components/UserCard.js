import React from "react";

// export interface UserCardProps {
//     name: string;
//     lastName: string;
// }

const UserCard = () => (
  <li className="UserCard">
    {this.props.name} {this.props.lastName}
  </li>
);

export default UserCard;
