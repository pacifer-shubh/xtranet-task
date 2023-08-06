import React from "react";
import {Link} from "react-router-dom";


const Nav = () => {

    return(

        <div className="container-flex">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      
      <form className="d-flex" role="search">
      <Link className="btn btn-outline-primary mx-2" to="/form">form</Link>
        <Link className="btn btn-outline-success" to="/formdata">ShowData</Link>

      </form>
  </div>
</nav>
        </div>

     )
}
export default Nav