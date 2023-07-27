import HomeButton from "../components/HomeButton";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";
import Save from "../components/Save";

const ViewOneList = () => {
  //using tripState to hold state and carry over (global state)
  const tripState = useContext(StoreContext);

  return (
    <div>
      <Link to={`/trip/packlists`}>
        <button>BACK</button>
      </Link>
      <div>
        <div>
          <h4>{tripState.packingListName || "Packing List Name"}</h4>
          <ul>
            {tripState.packingList?.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewOneList;
