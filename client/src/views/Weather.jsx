import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";
import Save from "../components/Save";

const Weather = () => {
  // carry over user submitted infor from previous page
  // const { id } = useParams();

  //use navigator with onSubmit in the form to transfer user to the list select page
  // const navigator = useNavigate();

  //using tripState to hold state and carry over (global state)
const tripState = useContext(StoreContext)


//TODO: API required - find a way to populate the weather api display on this page using the data from the prior (2) pages

  return (
<div>
      <Link to={`/trip/destination`}>
        <button>BACK - edit destination</button>
      </Link>

      {/* carry over duration & destination page info (trip name, start date, return date, destination) */}

<p>  {tripState.startDate || "Start Date"} | {tripState.tripName || "Trip Name"} | {tripState.returnDate || "Return Date"}</p>

<p>{tripState.destination || "Destination"}</p>



<p>Weather API Populates data display here...</p>
          {/* add weather api display here */}
          {/* <img>PLACEHOLDER GOOGLE MAP API IMAGE HERE</img> */}

          <div>
            <Link to={`/trip/listselect`}><button>Next</button></Link>
            <ViewSavedTrips />
            <Save/>
          </div>

    </div>  
  )
}

export default Weather