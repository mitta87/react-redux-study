import * as React from "react";
import { User } from "../types/index";

export interface AddUserFormProps {
  onNewUserChanged: (user: User) => void;
  onNewUser: (user: User) => void;
  newUser: User;
}

export default class AddUserForm extends React.Component<AddUserFormProps> {
  constructor(props: AddUserFormProps) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
  }

  onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    this.props.onNewUserChanged({ ...this.props.newUser, name });
  }

  onLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const lastName = event.target.value;
    this.props.onNewUserChanged({ ...this.props.newUser, lastName });
  }

  onAddBtnClick() {
    this.props.onNewUser(this.props.newUser);
  }

  render() {
    return (
      <div className="AddUserForm">
        <div>
          <label>First name
            <input onChange={e => this.onNameChange(e)} value={this.props.newUser.name} />
          </label>
        </div>
        <div>
          <label>Last name
            <input onChange={e => this.onLastNameChange(e)} value={this.props.newUser.lastName} />
          </label>
        </div>
        <div>
          <button onClick={() => this.onAddBtnClick()}>Add user</button>
        </div>
      </div>
    );
  }
}

