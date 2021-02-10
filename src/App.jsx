import React from 'react';

import './styles/app.scss';

import { fetchUsers } from './api/index';
import ErrorMessage from './components/ErrorMessage';
import LoadingBlock from './components/LoadingBlock';
import UsersList from './components/UsersList';

export default () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers().then((res) => setUsers(res));
  }, []);

  if (users === null) {
    return <ErrorMessage />;
  }

  return !users ? <LoadingBlock /> : <UsersList users={users} />;
};
