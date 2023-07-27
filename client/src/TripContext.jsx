// TripContext.jsx
import { createContext, useState } from "react";

const StoreContext = createContext();

//creating react component (wraps around a part of my application/ like a div)
export const StoreProvider = (props) => {
  const [tripName, setTripName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [destination, setDestination] = useState(null);
  const [packingList, setPackingList] = useState([]);
  const [packingListName, setPackingListName] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        tripName,
        setTripName,
        startDate,
        setStartDate,
        returnDate,
        setReturnDate,
        destination,
        setDestination,
        packingList,
        setPackingList,
        packingListName,
        setPackingListName,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
