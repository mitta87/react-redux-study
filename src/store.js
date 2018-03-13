import users from "./reducers/users";
import {createStore} from "redux";

const initialData = {
    newUser: {
        name: "",
        lastName: ""
    },
    users: []
};

export default createStore(users, initialData);