import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Accounts() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
          try {
            const response = await axios.get('http://localhost:3333/api/users');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        }
    
        fetchUsers();
      }, []);
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b font-semibold text-left">Name</th>
              <th className="py-2 px-4 border-b font-semibold text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }