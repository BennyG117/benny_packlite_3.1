import React, { useContext, useState } from "react";
import axios from "axios";
import StoreContext from "../TripContext";

const Save = () => {
  const tripState = useContext(StoreContext);

  const saveToDataBase = () => {
    const addToDB = {
      tripName: tripState.tripName,
      startDate: tripState.startDate,
      returnDate: tripState.returnDate,
      destination: tripState.destination,
      packingList: tripState.packingList,
      packingListName: tripState.packingListName,
    };
    // if (!addToDB.tripName){
    if (
      addToDB.tripName === null ||
      addToDB.tripName === undefined ||
      addToDB.tripName === ""
    ) {
      console.log("Throw Errors Here");
    }

    axios
      .post("http://localhost:8080/api/trips", addToDB)
      .then((res) => {
        console.log("check the DB");
      })
      .catch((err) => {
        console.log(err, "error here");
        const errs = err.response.data.errors;
      })
      .finally((_) => {
        console.table(addToDB);
      });
  };

  const saveToLocalStorage = () => {
    console.log("saving to local storage");
  };

  const handleSave = () => {
    saveToDataBase();
    saveToLocalStorage();
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Save;
