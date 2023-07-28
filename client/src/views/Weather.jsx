import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewSavedTrips from "../components/ViewSavedTrips";
import StoreContext from "../TripContext";
import Save from "../components/Save";
import axios from "axios";
import { weatherKey } from "../env";

const Weather = () => {
  const [icon, setIcon] = useState("#");
  const [avgtemp, setAvgtemp] = useState(null);
  const [maxtemp, setMaxtemp] = useState(null);
  const [mintemp, setMintemp] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState(false);
  const [chanceOfSnow, setChanceOfSnow] = useState(false);

  // carry over user submitted infor from previous page
  // const { id } = useParams();

  //use navigator with onSubmit in the form to transfer user to the list select page
  // const navigator = useNavigate();

  //using tripState to hold state and carry over (global state)
  const tripState = useContext(StoreContext);

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

  //TODO: API required - find a way to populate the weather api display on this page using the data from the prior (2) pages

  return (
    <div>
      <Link to={`/trip/destination`}>
        <button>BACK - edit destination</button>
      </Link>

      {/* carry over duration & destination page info (trip name, start date, return date, destination) */}

      <p>
        {" "}
        {tripState.startDate || "Start Date"} |{" "}
        {tripState.tripName || "Trip Name"} |{" "}
        {tripState.returnDate || "Return Date"}
      </p>

      <p>{tripState.destination || "Destination"}</p>

      <p>Weather API Populates data display here...</p>
      {/* add weather api display here */}
      {/* <img>PLACEHOLDER GOOGLE MAP API IMAGE HERE</img> */}
      <div>
        <p>Average Temp: {avgtemp}f</p>
        <img src={icon} alt="weather icon" />
        <p>Maxtemp: {maxtemp}f</p>
        <p>Mintemp: {mintemp}f</p>
        {/* <p>
          Chance of Snow:{" "}
          {chanceOfSnow ? "It will snow during your trip" : "It will not snow during your trip"}
        </p>
        <p>
          Chance of Rain:{" "}
          {chanceOfRain ? "It will rain during your trip" : "It will not rain during your trip"}
        </p> */}
      </div>
      <div>
        <Link to={`/trip/listselect`}>
          <button>Next</button>
        </Link>
        <ViewSavedTrips />
        <Save />
      </div>
    </div>
  );
};

export default Weather;
