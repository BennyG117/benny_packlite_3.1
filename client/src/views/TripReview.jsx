import HomeButton from "../components/HomeButton";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";
import Save from "../components/Save";
import { weatherKey } from "../env";

const TripReview = () => {
  //using tripState to hold state and carry over (global state)
  const tripState = useContext(StoreContext);

  const [icon, setIcon] = useState("#");
  const [avgtemp, setAvgtemp] = useState(null);
  const [maxtemp, setMaxtemp] = useState(null);
  const [mintemp, setMintemp] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState(false);
  const [chanceOfSnow, setChanceOfSnow] = useState(false);

  useEffect(() => {
    getWeather(tripState.startDate, tripState.destination);
  }, []);

  const isItGonnaRain = (hours) => {
    const result = false;
    hours.forEach((hour) => {
      if (hour.chance_of_rain > 0) {
        result = true;
      }
    });
  };
  const isItGonnaSnow = (hours) => {
    const result = false;
    hours.forEach((hour) => {
      if (hour.chance_of_snow > 0) {
        result = true;
      }
    });

    //go through each day and if chance of rain is > 20 set result to true
    return result;
  };

  const getWeather = (date = "2023-01-01", place = "Denver") => {
    axios
      .get(
        `https://api.weatherapi.com/v1/history.json?q=${place}&dt=${date}&key=${weatherKey}`
      )

      .then((res) => {
        const weatherData = res.data;
        const day = weatherData.forecast.forecastday[0].day;
        const hour = weatherData.forecast.forecastday[0].hour;
        setIcon(day.condition.icon);

        // console.log(avgtemp);
        setAvgtemp(day.avgtemp_f);

        // console.log(maxtemp);
        setMaxtemp(day.maxtemp_f);

        // console.log(mintemp);
        setMintemp(day.mintemp_f);

        setChanceOfSnow(isItGonnaSnow(hour));
        setChanceOfRain(isItGonnaRain(hour));
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <h3>Weather to expect:</h3>
        <img src={icon} alt="weather icon" />
        <p>Average Temp: {avgtemp}f</p>
      </div>
      <div>
        <h4>{tripState.packingListName || "Packing List Name"}</h4>
        <ul>
          {tripState.packingList?.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <Save onSaveComplete={handleSavedComplete}/> */}
      <a href={`/trip/savedtrips`}><Save/></a>
      <HomeButton />
    </div>
  );
};

export default TripReview;
