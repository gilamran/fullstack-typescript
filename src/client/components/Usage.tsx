import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

export const Usage: React.FC = () => (
  <Grid item xs={12}>
    <Card>
      <CardHeader title='Usage' />
      <CardContent>
        <Typography>
          <strong>npm run dev</strong> - Client and server are in watch mode with source maps, opens{' '}
          <a href='http://localhost:3000'>http://localhost:3000</a>
        </Typography>
        <Typography>
          <strong>npm run lint</strong> - Runs es-lint
        </Typography>
        <Typography>
          <strong>npm run build</strong> - <strong>dist</strong> folder will include all the needed files, both client
          (Bundle) and server.
        </Typography>
        <Typography>
          <strong>npm start</strong> - Runs <strong>node ./dist/server/server.js</strong>
        </Typography>
        <Typography>
          <strong>npm start:prod</strong> - sets <strong>NODE_ENV</strong> to <strong>production</strong> and then runs <strong>node ./dist/server/server.js</strong>. (Bypassing vite)
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
