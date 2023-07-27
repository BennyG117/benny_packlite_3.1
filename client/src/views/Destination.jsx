import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";

const Destination = () => {
  // carry over user submitted infor from previous page
  // const { id } = useParams();

  //global state
const tripState = useContext(StoreContext);

  //use navigator with onSubmit in the form to transfer user to the weather page
  const navigator = useNavigate();

  //db addition of model: "destination"
  const [formData, setFormData] = useState({
    destination: "",
  });

  //add validation, so user can't progress without completing inputs
  const [destinationErr, setDestinationErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    tripState.setDestination(formData.destination);
    return navigator("/trip/weather")
    
//TODO: error & roadblock below:
    //!Error here - may need to adjust to a Put Method instead, so the destination input adds to the previous db entry

    //! May also need to update navigator so that upon the form submit is sends the specific weather api request to populate the following page with the weather results
    axios
      .post(`http://localhost:8080/api/trips`, formData)
      .then((res) => {
        setFormData({
          destination: "",
        });
        navigator("/trip/weather");
      })
      .catch((err) => {
        console.log(err, "error here");
        const errs = err.response.data.errors;
        if (errs.destination) {
          setDestinationErr(errs.destination.message);
        } else {
          setDestinationErr("");
        }
      });
  };

  //adding error style
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };

  return (
    <div>
      <Link to={`/trip/duration`}>
        <button>BACK - edit trip dates</button>
      </Link>

      {/* carry over duration page info (trip name, start date, return date) */}

<p>  {tripState.startDate || "Start Date"} | {tripState.tripName || "Trip Name"} | {tripState.returnDate || "Return Date"}</p>

      <fieldset>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{destinationErr}</p>
          <label>Destination: </label>
          <input
            name="destination"
            type="text"
            onChange={handleChange}
            value={formData.destination}
          />

          {/* add google map api image here */}
          {/* <img>PLACEHOLDER GOOGLE MAP API IMAGE HERE</img> */}

          <div>
            <button>Continue</button>
            <ViewSavedTrips />
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Destination;
