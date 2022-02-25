import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarlogo from "../assets/Navbarlogo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavbarMain px-3 py-3 ">
      <div className="NavbarLinedClass d-flex justify-content-between align-items-center ">
        <div className="NavbarMainHeading">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2 className="NavbarMainHeadingIner">MEDILO</h2>
          </Link>
        </div>
        <div className="NavbarItems d-flex">
          <Link
            style={{ textDecoration: "none" }}
            to="/addForm"
            className=" px-4"
          >
            <p className="inerLink">New Order</p>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            to="/addMedicine"
            className=""
          >
            <p className="inerLink">Add Medicine</p>
          </Link>

          {/* <Link to="/addForm" >
            <h2>Add Form</h2>
         </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
