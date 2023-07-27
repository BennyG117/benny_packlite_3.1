import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";

//TODO: Having issues submitting partial data with the form to create a new trip. Trying to add trip name, start date, and return date. Due to axios error, button doesn't lead to navigator working.

const Duration = () => {
  //adding navigator to move user to next page on user submit of the form
  const navigator = useNavigate();

  //using tripState to hold state and carry over (global state)
const tripState = useContext(StoreContext)


  //db addition of model attributes fot current page: tripName, startDate, returnDate
  const [formData, setFormData] = useState({
    tripName: "",
    startDate: "",
    returnDate: "",
  });

  //!add validation, so user can't progress without completing inputs
  const [tripNameErr, setTripNameErr] = useState("");
  const [startErr, setStartErr] = useState("");
  const [returnErr, setReturnErr] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

tripState.setTripName(formData.tripName);
tripState.setStartDate(formData.startDate);
tripState.setReturnDate(formData.returnDate);
return navigator("/trip/destination");

    //! ERROR here, submit isn't adding info to db or navigating to the next page as intended
    // axios
    //   .post(`http://localhost:8080/api/trips`, formData)
    //   .then((res) => {
    //     setFormData({
    //       tripName: "",
    //       startDate: "",
    //       returnDate: "",
    //     });
    //     navigator("/trip/destination");
    //   })
    //   .catch((err) => {
    //     console.log(err, "error here");
    //     const errs = err.response.data.errors;
    //     if (errs.tripName) {
    //       setTripNameErr(errs.tripName.message);
    //     } else {
    //       setTripNameErr("");
    //     }
    //     if (errs.startDate) {
    //       setStartErr(errs.startDate.message);
    //     } else {
    //       setStartErr("");
    //     }
    //     if (errs.returnDate) {
    //       setReturnErr(errs.returnDate.message);
    //     } else {
    //       setReturnErr("");
    //     }
    //   });
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
      <h5>Fill in your trip info and receive a list of items to pack!</h5>

      <Link to={`/`}>
        <button>BACK</button>
      </Link>
      {/* //! May need to adjust inputs oncek google calendar api is working/integrated */}

      <fieldset>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{tripNameErr}</p>
          <label>Trip Name: </label>
          <input
            name="tripName"
            type="text"
            onChange={handleChange}
            value={formData.tripName}
          />
          <br />
          <p style={errStyle}>{startErr}</p>
          <label>Start Date: </label>
          <input
            name="startDate"
            type="date"
            onChange={handleChange}
            value={formData.startDate}
          />
          <br />
          <p style={errStyle}>{returnErr}</p>
          <label>Return Date: </label>
          <input
            name="returnDate"
            type="date"
            onChange={handleChange}
            value={formData.returnDate}
          />

          <div>
            <div>
              <button>Continue</button>
              <ViewSavedTrips />
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Duration;
