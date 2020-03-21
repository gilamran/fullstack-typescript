import { makeStyles, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(() => ({
  LogoImg: {
    width: 150,
    paddingBottom: 25,
  },
}));

export const Home: React.FunctionComponent = () => {
  const classes = useStyles({});
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='QQ' />
        <CardContent>
          <Typography>
            The fast Queue app
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
