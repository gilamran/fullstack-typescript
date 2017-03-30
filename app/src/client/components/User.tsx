import * as React from 'react';

export class User extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>User [{this.props.match.params.userId}] component</h1>
      </div>
    )
  }
}
