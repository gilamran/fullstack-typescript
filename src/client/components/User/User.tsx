import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { IUserDTO } from '../../../shared/IUserDTO';

const css = require('./User.css');

interface IProps {
  user: IUserDTO;
}

export const User: React.StatelessComponent<IProps> = (props: IProps) => (
  <Panel className={css.container}>
    <h2>Id: {props.user.userId}</h2>
    <h2>Name: {props.user.userName}</h2>
    <h2>Image: {props.user.imageUrl}</h2>
  </Panel>
);
