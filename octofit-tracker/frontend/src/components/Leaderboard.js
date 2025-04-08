import React from 'react';

function Leaderboard() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>1400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
