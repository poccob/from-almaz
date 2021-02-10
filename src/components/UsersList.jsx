export default ({ users }) => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (users.length === 0) {
    return <h3>Пользователей нет.</h3>;
  }

  return (
    <ul>{users && users.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
  );
};
