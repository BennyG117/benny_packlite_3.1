import React from 'react'
import { Link } from "react-router-dom";


//TODO: create button that take user back to page 1 Landing page?


const HomeButton = () => {
  return (
    <div>
      <Link to={`/`}><button>Home</button></Link>


    </div>
  )
}

export default HomeButton