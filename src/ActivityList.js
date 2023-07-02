import React from "react";
import "./ActivityList.css";
import Activity from './Activity';



const ActivityList = ({ activities }) => {
  return (
    <div>
      <h2>Schedule</h2>
      <ul>
        {activities.map((activity, index) => (
          <Activity key={index} time={activity.time} description={activity.description} />
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
