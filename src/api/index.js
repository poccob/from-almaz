/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return data;
  } catch {
    return null;
  }
};
