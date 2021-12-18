import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import { IUserDTO } from '../../shared/IUserDTO';
import { getUserFullName } from '../../shared/utils';
import { loadUsersAPI } from '../utils/api-facade';

export const UsersList: React.FC = () => {
  const [users, setUsers] = React.useState<IUserDTO[]>(null);
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
            <List>
              {users.map((user) => (
                <ListItem key={user.userId}>{getUserFullName(user)}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
  );
};
