import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('/api/activities/')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.duration}</td>
                <td>{activity.calories_burned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
