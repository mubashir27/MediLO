import React from "react";
import { Button } from "react-bootstrap";
import AddForm from "../AddForm/AddForm";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeMainOuter">
      <div className="homeMain">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="homeMainIner px-4 ">
          <div className="homeMainInnerText">MEDILO</div>
          <div className="homeMainDescription">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur sunt, totam similique culpa neque error eos ut
              nostrum. Cumque, ratione.
            </p>
          </div>
          <div className="homeMainBtns">{/* <Button> </Button> */}</div>
        </div>
      </div>
      <div className="cardHome m-4 ">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
