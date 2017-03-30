import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { User } from './User';

export class UsersList extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>UsersList component</h1>
        <NavLink to="/users-list/1">User 1</NavLink>
        <NavLink to="/users-list/2">User 2</NavLink>
        <NavLink to="/users-list/3">User 3</NavLink>
        <Route path="/users-list/:userId" component={User}/>
      </div>
    )
  }
}
