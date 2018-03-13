import C from "./constants";

export const addUser = (user) => ({
    type: C.ADD_USER,
    user
});

export const onNewUserChanged = (newUser) => ({
    type: C.CHANGE_NEW_USER,
    newUser
});