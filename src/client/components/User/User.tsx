import * as React from 'react';
import { IUserDTO } from '../../../shared/IUserDTO';
const css = require('./User.css');

type TProps = {
  user: IUserDTO
};

export const User: React.StatelessComponent<TProps> = (props: TProps) => (
  <div className={css.container}>
    <h2>Id: {props.user.userId}</h2>
    <h2>Name: {props.user.userName}</h2>
    <h2>Image: {props.user.imageUrl}</h2>
  </div>
);
