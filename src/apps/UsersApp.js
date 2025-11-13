import React, { useEffect, useState } from 'react';

// --- Header Component ---
function Header({ selectedUser }) {
  return (
    <header style={{ marginBottom: '20px' }}>
      <h1>User List</h1>
      {selectedUser ? (
        <p>Selected: <strong>{selectedUser.name}</strong></p>
      ) : (
        <p>No user selected</p>
      )}
    </header>
  );
}

// --- Item Component ---
function Item({ user, onSelect }) {
  return (
    <li
      onClick={() => onSelect(user)}
      style={{
        border: '1px solid #ccc',
        margin: '5px 0',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <strong>{user.name}</strong> — {user.email}
    </li>
  );
}

// --- List Component ---
function List({ users, onSelect }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <Item key={user.id} user={user} onSelect={onSelect} />
      ))}
    </ul>
  );
}

// --- Main App ---
function UsersApp() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', margin: '20px' }}>
      <Header selectedUser={selectedUser} />
      <List users={users} onSelect={setSelectedUser} />
    </div>
  );
}

export default UsersApp;
