import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import * as React from 'react';
import { IUserDTO } from '../../../shared/IUserDTO';

interface IProps {
  user: IUserDTO;
}

export const User: React.StatelessComponent<IProps> = (props: IProps) => (
  <Card>
    <CardHeader title={`User: ${props.user.userName}`} />
    <CardContent>
      <Typography variant='subheading'>Id: {props.user.userId}</Typography>
      <Typography variant='subheading'>Image Url: {props.user.imageUrl}</Typography>
    </CardContent>
  </Card>
);
