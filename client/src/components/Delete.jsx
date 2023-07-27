import React from "react";


//TODO:confirm delete works properly

const Delete = (props) => {
  //pass this into edit
  const { deleteTrip } = props;

  return (
    <div>
      <button onClick={deleteTrip}>
        Delete
      </button>
    </div>
  );
};

export default Delete;