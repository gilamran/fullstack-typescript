import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 150px;
  padding-bottom: 25px;
`;

const CustomCardHeader = styled(CardHeader)`
  background-color: bisque;
`;

export const Home: React.FunctionComponent = () => (
  <Grid item xs={12}>
    <Card>
      <CustomCardHeader title='FullStack React with TypeScript' />
      <CardContent>
        <LogoImg src='/assets/images/logo.png' />
        <Typography>
          This is a starter kit to get you up and running with React & TypeScript on top of material-ui.
        </Typography>
        <Typography gutterBottom>
          An example for client/server shared code can be found at `<Link to='/users-list'>Example Users List</Link> tab
        </Typography>
        <Typography>
          You can read more about how to share code between the client and the server at my
          <a href='https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e'>medium blog post</a>
          .
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
