import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import StoreContext from "../TripContext";
import { packingLists } from "../PackLists";
import HomeButton from '../components/HomeButton'

const PackLists = () => {

  const navigator = useNavigate();

  const tripState = useContext(StoreContext);

  //db addition of model attributes fot current page: tripName, startDate, returnDate
  const [formData, setFormData] = useState({
    packingList: [
      "Hiking Cold",
      "Hiking Rain",
      "Fancy",
      "Hiking Hot",
      "Beach Trip",
      "Museum/City",
      "Nerd Trip",
      "Ski Trip",
      "TBD",
      "Create custom list",
      "Empty list",
    ],
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleListSelected = (e) => {
    e.preventDefault();
    const selectedList = e.target.getAttribute("value")
    //TODO: add the list of items to state*
    tripState.setPackingList([e.target.getAttribute("value")]);


    //TODO:import remaining lists in switch
    //using switch to make packing lists populate
    switch (selectedList) {
      case "Hiking Cold":
        tripState.setPackingList(packingLists.hikingCold)
        break;
      case "Hiking Rain":
        tripState.setPackingList(packingLists.hikingRain)
        break;
      case "Fancy":
        tripState.setPackingList(packingLists.fancy)
        break;
      case "Hiking Hot":
        tripState.setPackingList(packingLists.hikingHot)
        break;
      case "Beach Trip":
        tripState.setPackingList(packingLists.beachTrip)
        break;
      case "Museum/City":
        tripState.setPackingList(packingLists.museumCity)
        break;
      case "Nerd Trip":
        tripState.setPackingList(packingLists.nerdTrip)
        break;
      case "Ski Trip":
        tripState.setPackingList(packingLists.skiTrip)
        break;
      case "TBD":
        tripState.setPackingList(packingLists.tbd)
        break;
    
      default:
        tripState.setPackingList([])
        break;
    }

    tripState.setPackingListName(selectedList);
    navigator("/trip/viewonelist/:id");
  };




  return (
    <div>
      <h2>View Packlists</h2>
    
      <div>
        {formData.packingList.map((list, key) => (
          <button onClick={handleListSelected} value={list} key={key}>
            {list}
          </button>
        ))}
      </div>
    
    
    
    <HomeButton/>
    </div>
  )
}

export default PackLists