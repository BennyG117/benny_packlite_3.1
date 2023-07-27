import React, { useState, useEffect } from "react";
import HomeButton from '../components/HomeButton'
import { Link } from "react-router-dom";
import axios from "axios";

const SavedTrips = () => {


const [trips, setTrips] = useState([]);


const getAllTrips = () => {
  axios.get("http://localhost:8080/api/trips")
  .then((res) => setTrips(res.data))
  .catch((err) => console.log(err));
};

useEffect(getAllTrips, []);

  return (
    <div>
      <h2>Saved Trips</h2>
      <br/>
      <HomeButton/>
      <hr/>
      <div >
        {trips.length > 0 ? (
          //when using .map below we have to includes key={key} in the return
          trips.map((trip, key) => {
            return (
              <div key={key}>
                <div >
                  <div>
                    <h2>{trip.tripName} </h2>
                    <p>{trip.startDate}</p>
                    <p>{trip.returnDate}</p>
                  </div>
                  <div>
                    <Link
                      to={`/trip/edit/${trip._id}`}
                      key={key}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>LOADING...</p>
        )}
      </div>


    </div>
  )
}

export default SavedTrips