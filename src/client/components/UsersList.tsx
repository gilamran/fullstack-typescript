import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import { IUserDTO } from '@shared/IUserDTO';
import { getUserFullName } from '@shared/utils';
import { loadUsersAPI } from '../utils/api-facade';

export const UsersList: React.FC = () => {
  const [users, setUsers] = React.useState<IUserDTO[] | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    const fetchUsers = async () => {
      setIsLoading(true);
      const users = await loadUsersAPI();
      if (!cancelled) {
        setUsers(users);
        setIsLoading(false);
      }
    };

    fetchUsers();
    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='Users List' />
        <CardContent>
          {users ? (
            <List>
              {users.map((user) => (
                <ListItem key={user.userId}>{getUserFullName(user)}</ListItem>
              ))}
            </List>
          ) : (
            'No users found'
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
