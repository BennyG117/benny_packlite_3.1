import HomeButton from "../components/HomeButton";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";
import Save from "../components/Save";

const TripReview = () => {
  //using tripState to hold state and carry over (global state)
  const tripState = useContext(StoreContext);


  //TODO: TRYING TO FIX NAVIGATE
//     // like a redirect
//     const navigator = useNavigate();

// const handleSavedComplete = () => {
//   navigator("/trip/savedtrips");
// };

  return (
    <div>
      <h3>TripReview</h3>

      <Link to={`/trip/listselect`}>
        <button>BACK - edit list select</button>
      </Link>

      {/* carry over duration & destination page info (trip name, start date, return date, destination) */}

      <p>
        {" "}
        {tripState.startDate || "Start Date"} |{" "}
        {tripState.tripName || "Trip Name"} |{" "}
        {tripState.returnDate || "Return Date"}
      </p>

      <p>{tripState.destination || "Destination"}</p>

      <div>
        <h4>{tripState.packingListName || "Packing List Name"}</h4>
        <ul>
          {tripState.packingList?.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <Save onSaveComplete={handleSavedComplete}/> */}
      <Link to={`/trip/savedtrips`}><Save/></Link>
      <HomeButton />
    </div>
  );
};

export default TripReview;
