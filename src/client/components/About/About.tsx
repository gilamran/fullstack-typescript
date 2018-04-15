import * as React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const css = require('./About.css');

export const About = () => (
  <Card>
    <CardHeader>About</CardHeader>
    <CardBody>
      <CardTitle>Created by Gil Amran.</CardTitle>
      <CardText>
        You can find information at <a href='http://github.com/gilamran/fullstack-typescript'>github</a>
      </CardText>
    </CardBody>
  </Card>
);