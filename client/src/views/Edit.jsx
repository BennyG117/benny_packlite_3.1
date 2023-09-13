import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "../components/Delete";
import axios from "axios";
import { weatherKey } from "../env";
import StoreContext from "../TripContext";

const Edit = () => {
  
  //the id that's refrenced from Routes
  const { id } = useParams();

    // like a redirect
    const navigator = useNavigate();

    //model data
    const [formData, setFormData] = useState({
      tripName: "",
      startDate: "",
      returnDate: "",
      Destination: "",
      packingList: "",
    });

  //delete component
  const [trips, setTrips] = useState([]);

  //Error catch
const [tripNameErr, setTripNameErr] = useState("");
const [startDateErr, setStartDateErr] = useState("");
const [returnDateErr, setReturnDateErr] = useState("");
const [destinationErr, setDestinationErr] = useState("");
const [packingListErr, setPackingListErr] = useState("");
// const [packingListNameErr, setPackingListNameErr] = useState("");


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((currentData) => ({ ...currentData, [name]: value }));
};


//axios get request - one with id
useEffect(()=> {
  axios.get(`http://localhost:8080/api/trips/${id}`)
  .then((res)=> {
    setFormData(res.data);
  })
  .catch((err)=> console.log(err));
}, []);

const handleSubmit = (e) => {
  e.preventDefault();

  axios
  .put(`http://localhost:8080/api/trips/${id}`, formData)
  // .then(res=> console.log(res))
  .then((res) => {
    setFormData({
      tripName: "",
      startDate: "",
      returnDate: "",
      Destination: "",
      packingList: "",
    });
    //returns back to saved trips list
    navigator("/trip/savedtrips");
  })
  // .catch(err=>console.log(err))
  .catch((err) => {
    const errs = err.response.data.errors;
    if (errs.tripName) {
      setTripNameErr(errs.tripName.message);
    } else {
      setTripNameErr("");
    }
    if (errs.startDate) {
      setStartDateErr(errs.startDate.message);
    } else {
      setStartDateErr("");
    }
    if (errs.returnDate) {
      setReturnDateErr(errs.returnDate.message);
    } else {
      setReturnDateErr("");
    }
    if (errs.destination) {
      setDestinationErr(errs.destination.message);
    } else {
      setDestinationErr("");
    }
    if (errs.packingList) {
      setPackingListErr(errs.packingList.message);
    } else {
      setPackingListErr("");
    }
  });
};

  // adjust delete to work on EDIT - bring in delete component
  const deletingTrip = (id) => {
    axios
      .delete(`http://localhost:8080/api/trips/${id}`)
      .then((res) => console.log(res));
    setTrips(trips.filter((targetTrip) => targetTrip._id !== id));
  };

  //adding error style
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };

  //********************* */
// //quick add weather:

// const [icon, setIcon] = useState("#");
// const [avgtemp, setAvgtemp] = useState(null);
// const [maxtemp, setMaxtemp] = useState(null);
// const [mintemp, setMintemp] = useState(null);
// const [chanceOfRain, setChanceOfRain] = useState(false);
// const [chanceOfSnow, setChanceOfSnow] = useState(false);

// // carry over user submitted infor from previous page
// // const { id } = useParams();

// //use navigator with onSubmit in the form to transfer user to the list select page
// // const navigator = useNavigate();

// //using tripState to hold state and carry over (global state)
// const tripState = useContext(StoreContext);

// useEffect(() => {
//   getWeather(tripState.startDate, tripState.destination);
// }, []);

// const isItGonnaRain = (hours) => {
//   const result = false;
//   hours.forEach((hour) => {
//     if (hour.chance_of_rain > 0) {
//       result = true;
//     }
//   });
// };
// const isItGonnaSnow = (hours) => {
//   const result = false;
//   hours.forEach((hour) => {
//     if (hour.chance_of_snow > 0) {
//       result = true;
//     }
//   });

//   //go through each day and if chance of rain is > 20 set result to true
//   return result;
// };

// const getWeather = (date = "2023-01-01", place = "Denver") => {
//   axios
//     .get(
//       `https://api.weatherapi.com/v1/history.json?q=${place}&dt=${date}&key=${weatherKey}`
//     )

//     .then((res) => {
//       const weatherData = res.data;
//       const day = weatherData.forecast.forecastday[0].day;
//       const hour = weatherData.forecast.forecastday[0].hour;
//       setIcon(day.condition.icon);

//       // console.log(avgtemp);
//       setAvgtemp(day.avgtemp_f);

//       // console.log(maxtemp);
//       setMaxtemp(day.maxtemp_f);

//       // console.log(mintemp);
//       setMintemp(day.mintemp_f);

//       setChanceOfSnow(isItGonnaSnow(hour));
//       setChanceOfRain(isItGonnaRain(hour));
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };



  //********************* */

  return (
<div>
<h2>Edit Trip</h2>

<fieldset>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{tripNameErr}</p>
          <label>Trip Name </label>
          <input
            name="tripName"
            type="text"
            onChange={handleChange}
            value={formData.tripName}
          />
          <br />
          <p style={errStyle}>{startDateErr}</p>
          <label>Start Date </label>
          <input
            name="startDate"
            type="text"
            onChange={handleChange}
            value={formData.startDate}
          />
          <br />
          <p style={errStyle}>{returnDateErr}</p>
          <label>Return Date </label>
          <input
            name="returnDate"
            type="text"
            onChange={handleChange}
            value={formData.returnDate}
          />
          <br />
          <p style={errStyle}>{destinationErr}</p>
          <label>Destination </label>
          <input
            name="destination"
            type="text"
            onChange={handleChange}
            value={formData.destination}
          />
          {/* <br />
          <p>Average Weather:</p>
          <p>Average Temp: {avgtemp}f</p>
        <img src={icon} alt="weather icon" /> */}
          <br />
          {/* //! CONTINUE TO COMPLETE HERE */}
          <p style={errStyle}>{packingListErr}</p>
          <label>Packing List Name </label>
          <input
            name="packingListName"
            type="text"
            onChange={handleChange}
            value={formData.packingListName}
          />
          <br />
          {/* <label>List Items </label>
          <textarea
            name="packingListName"
            type="text"
            onChange={handleChange}
            value={formData.packingListName}
          />
          <br /> */}
          <div>
            <div className="botButtons">
              <button className="submit">Update Trip Details</button>
              <Delete
                deleteTrip={() => {
                  deletingTrip(formData._id);
                }}
              />
            </div>
          </div>
        </form>
      </fieldset>




<Link to={`/trip/savedtrips`}><button>View Saved Trips</button></Link></div>  
    );
};

export default Edit