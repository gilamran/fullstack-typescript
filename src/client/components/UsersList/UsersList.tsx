import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { IUserDTO } from '../../../shared/IUserDTO';
import { User } from '../User/User';
import { loadUsersAPI } from '../../utils/api-facade';
import { Card, CardHeader, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const css = require('./UsersList.css');

interface IState {
  users: IUserDTO[];
  isLoading: boolean;
}

export class UsersList extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  public render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Card>
      <CardHeader>Users List</CardHeader>
      <CardBody>
        <ListGroup>
          {this.state.users.map(user =>
            (<ListGroupItem key={user.userId}>
              <NavLink to={`/users-list/${user.userId}`}>{user.userName}</NavLink>
            </ListGroupItem>)
          )}
        </ListGroup>

        <Route exact path='/users-list/:userId'
               render={props => <User user={this.getUserById(props.match.params.userId)}/>}/>
      </CardBody>
    </Card>
    );
  }

  public async componentDidMount() {
    const users = await loadUsersAPI();
    this.setState({users, isLoading: false});
  }

  private getUserById(userId) {
    return this.state.users.find(u => u.userId === userId);
  }
}
