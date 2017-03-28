import * as React from 'react';
import {Link} from 'react-router-dom';

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Home component</h1>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
      </div>
    )
  }
}
