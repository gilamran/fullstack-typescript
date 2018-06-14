import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

const css = require('./Home.css');
const logoImg = require('../../../../assets/images/logo.png');

export const Home = () => (
  <Grid item xs={12}>
    <Card>
      <CardHeader title='FullStack React with TypeScript' />
      <CardContent>
        <img src={logoImg} className={css.logo} />
        <Typography variant='subheading'>This is a starter kit to get you up and running with React & TypeScript on top of material-ui.</Typography>
        <Typography variant='subheading' gutterBottom>An example for client/server shared code can be found at `<Link to='/users-list'>Example Users List</Link> tab</Typography>
        <Typography>You can read more about how to share code between the client and the server at my <a href='https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e'>medium blog post</a>.</Typography>
      </CardContent>
    </Card>
  </Grid>
);
