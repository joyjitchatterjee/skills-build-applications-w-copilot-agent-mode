import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('/api/workouts/')
      .then(response => setWorkouts(response.data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

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
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
                <td>{workout.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
