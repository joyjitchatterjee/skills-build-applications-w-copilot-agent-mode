import React from 'react';

function Workouts() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Workout</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yoga</td>
              <td>Relaxing yoga session</td>
              <td>60 mins</td>
            </tr>
            <tr>
              <td>HIIT</td>
              <td>High-intensity interval training</td>
              <td>30 mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
