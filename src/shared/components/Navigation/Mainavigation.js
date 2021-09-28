import React from "react";
import { Link, useHistory } from "react-router-dom";
import MainHeader from "./MainHeader";

const Mainavigation = (props) => {
  const history = useHistory();

  return (
    <MainHeader>
      <nav className="navbar  navbar-expand-lg navbar-light" style={{"background-color": "#e3f2ff"}}>
        <div className="container-fluid ">
         
            <Link className="navbar-brand" to="/"><h1>Users....</h1></Link>
        
        
          <button  className='btn btn-primary ms-auto me-2' onClick={() => history.push("/")}>Home</button>
          <button  className=' btn btn-info' onClick={() => history.push("/places")}>All locations</button>
        
        </div>

      </nav>
     
      
    </MainHeader>
  );
};

export default Mainavigation;
