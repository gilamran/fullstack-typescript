import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export const About: React.FunctionComponent = () => (
  <Grid item xs={12}>
    <Card>
      <CardHeader title='Created by Gil Amran.' />
      <CardContent>
        <Typography>
          You can find information at <a href='http://github.com/gilamran/fullstack-typescript'>github</a>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
