import React from 'react'
import { Link } from "react-router-dom";

const ViewSavedTrips = () => {
  return (
    <div>
      <Link to={`/trip/savedtrips`}><button>View Saved Trips</button></Link>


    </div>  )
}

export default ViewSavedTrips