import React from 'react';

function Teams() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blue Team</td>
              <td>5</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>Red Team</td>
              <td>4</td>
              <td>1100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
