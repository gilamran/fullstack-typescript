import * as React from 'react';
import { IUserDTO } from '../../shared/IUserDTO';
import { loadUserData } from '../utils/api-facade';

type TState = {
  userData: IUserDTO
};

export class User extends React.Component<any, TState> {

  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
  }

  async componentDidMount() {
    const userData = await loadUserData('123');
    this.setState({userData: userData});
  }

  render() {
    return (
      <div>
        <h1>User [{this.props.match.params.userId}] component</h1>
      </div>
    )
  }
}
