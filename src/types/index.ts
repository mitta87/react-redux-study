export interface User {
  name: string;
  lastName: string;
}

export interface StoreState {
  newUser: User;
  users: User[];
}
