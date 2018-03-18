import React from "react";
import PropTypes from "prop-types";

export default class AddUserForm extends React.Component {
  constructor() {
    super();
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
  }

  onNameChange(event) {
    const name = event.target.value;
    this.props.onNewUserChanged({ ...this.props.newUser, name });
  }

  onLastNameChange(event) {
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
            <input onChange={this.onNameChange} value={this.props.newUser.name} />
          </label>
        </div>
        <div>
          <label>Last name
            <input onChange={this.onLastNameChange} value={this.props.newUser.lastName} />
          </label>
        </div>
        <div>
          <button onClick={this.onAddBtnClick}>Add user</button>
        </div>
      </div>
    );
  }
}
AddUserForm.propTypes = {
  onNewUserChanged: PropTypes.func.isRequired,
  onNewUser: PropTypes.func.isRequired,
  newUser: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};

