import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";


const Dashboard = () => {
  return (
    <div>
      <h3>Choose an option...</h3>

    <Link to={`/trip/duration`}><button>Add a new trip</button></Link>
    <Link to={`/trip/packlists`}><button>View all packing lists</button></Link>

    <Link to={`/trip/savedtrips`}><button>View Saved Trips</button></Link>

    </div>
  )
}

export default Dashboard