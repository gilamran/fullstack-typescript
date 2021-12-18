import { Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import { useNavigate , useLocation, useParams } from 'react-router-dom';

export const RouterExample: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();

  return (
    <Card>
      <CardHeader title='Router Example' />
      <CardContent>
        <Typography>
          location.pathname: <strong>{location.pathname}</strong>
        </Typography>
        <Typography>
          "slug" parameter: <strong>{slug}</strong>
        </Typography>
        <Button variant='contained' color='primary' onClick={() => navigate(-1)}>
          navigate(-1)
        </Button>
      </CardContent>
    </Card>
  );
};
