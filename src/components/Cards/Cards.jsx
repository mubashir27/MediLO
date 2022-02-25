import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Cards.css";
import { cardData } from "../SearchBar/SearchData";
const Cards = () => {
  return (
    <div className="row d-flex justify-content-between mx-auto pt-3 ">
      {cardData.slice(0, 7).map((data) => (
        <Card className="cardMain col-md-4 m-3 ">
          <Card.Img className="cardImg" variant="top" src={data.image} />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">{data.medicineName}</Card.Title>
            <Card.Text className="cardText">
              {data.medicineDescription}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
