import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import * as React from 'react';

const logoImg = require('../../../assets/images/logo.png');

export const About = () => (
  <Grid item xs={12}>
    <Card>
      <CardHeader title='Created by Gil Amran.' />
      <CardContent>
        <Typography variant='subheading'>
          You can find information at{' '}
          <a href='http://github.com/gilamran/fullstack-typescript'>github</a>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
