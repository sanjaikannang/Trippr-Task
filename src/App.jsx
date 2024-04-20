import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUsers();
  }, []); 

  return (
    <div className="container mx-auto">
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-4 flex justify-center">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 p-16">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-2xl shadow-xl p-6">
            <h4 className="text-md">Name : {user.name}</h4>
            <h4 className="text-md text-gray-600 mb-2">Email : {user.email}</h4>
            <h4 className="text-md text-gray-600 mb-2">Phone : {user.phone}</h4>
            <h4 className="text-md text-gray-600 mb-2">City : {user.address.city}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
