import * as React from 'react';
import { IUserDTO } from '../../../shared/IUserDTO';
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

interface IProps {
  user: IUserDTO;
}

export const User: React.StatelessComponent<IProps> = (props: IProps) => (
  <Card>
    <CardHeader>User Details</CardHeader>
    <CardBody>
      <CardTitle>User: {props.user.userName}</CardTitle>
      <CardText>Id: {props.user.userId}</CardText>
      <CardText>Image: {props.user.imageUrl}</CardText>
    </CardBody>
  </Card>
);
