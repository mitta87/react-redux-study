import * as React from "react";
import UserCard from "./UserCard";
import { User } from "../types/index";

export interface UserCardsProps {
  users: User[];
}

const mapUser = (user: User, index: number) => <UserCard {...user} key={index} />;

const UserCardsContainer = (props: UserCardsProps) => {
  return   <ul className="UserCardsContainer">
      {props.users.map(mapUser)}
  </ul>;
};

export default UserCardsContainer;
