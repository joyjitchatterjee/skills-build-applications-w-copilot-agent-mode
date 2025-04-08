import React from 'react';

function Users() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane.smith@example.com</td>
              <td>User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
