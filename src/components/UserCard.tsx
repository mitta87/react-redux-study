import * as React from "react";

export interface UserCardProps {
  name: string;
  lastName: string;
}

const UserCard = ({ name, lastName }: UserCardProps) => (
  <li className="UserCard">
    {name} {lastName}
  </li>
);

export default UserCard;
