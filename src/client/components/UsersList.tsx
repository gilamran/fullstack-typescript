import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { IUserDTO } from '../../shared/IUserDTO';
import { User } from './User';
import { loadUsersAPI } from '../utils/api-facade';

type TState = {
  users: IUserDTO[],
  isLoading: boolean
};

export class UsersList extends React.Component<any, TState> {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const users = await loadUsersAPI();
    this.setState({users: users, isLoading: false});
  }

  getUserById(userId) {
    return this.state.users.find(u => u.userId == userId);
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>UsersList component</h1>
        <ul>
          {this.state.users.map(user =>
            (<li key={user.userId}>
              <NavLink to={`/users-list/${user.userId}`}>{user.userName}</NavLink>
            </li>)
          )}
        </ul>

        <Route exact path="/users-list/:userId" render={props => <User user={this.getUserById(props.match.params.userId)}/>} />
      </div>
    )
  }
}
