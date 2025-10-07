import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
function User({ username }) {
  const { username: newUsername, email } = useContext(DataContext);
  console.log(newUsername);
  console.log('user component is running');
  return (
    <div className="border p-6 border-blue-500 m-3 rounded-sm">
      <h1>User component</h1>
      <h1>Show user name : {username}</h1>
      <h1>{newUsername}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default User;
