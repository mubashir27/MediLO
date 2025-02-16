import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./AddForm.css";
import Select from "react-select";
import axios from "axios";

const AddForm = () => {
  const [cusName, setCusName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [timings, setTimings] = useState(null);
  const [medcinePerDay, setMedcinePerDay] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [error, setError] = useState(""); // For error messages

  const weekOptions = [
    { value: "1", label: "1-1-1" },
    { value: "2", label: "1-0-0" },
    { value: "3", label: "1-0-1" },
    { value: "4", label: "0-1-1" },
  ];

  const onSubmit = () => {
    if (!cusName || !age || !phoneNo || !timings || !medcinePerDay || !quantity) {
      setError("All fields are required.");
      return;
    }

    // Handling timing value safely
    const timingValue = timings ? timings.value : "";

    // Validate phone number
    if (!/^\d{10}$/.test(phoneNo)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // Construct str using join instead of forEach
    const str = selectedData.join(",");

    axios
      .post("http://localhost:3001/api/insert", {
        cusName,
        phoneNo,
        age,
        timing: timingValue,
        medcinePerDay,
        quantity,
        str,
      })
      .then(() => {
        alert("Success");
      })
      .catch((err) => {
        setError("Failed to submit form. Please try again.");
      });
  };

  return (
    <div className="addFormMain">
      <div className="Navbar">
        <Navbar />
      </div>
      <div
        style={{ fontFamily: "Work Sans" }}
        className="d-flex justify-content-center m-auto py-5"
      >
        <div className="addFormPadingClass px-4 py-4">
          <div className="formMain py-4">
            <h2
              style={{ color: "#000", fontSize: "2.5rem", fontWeight: "bold" }}
            >
              New Order
            </h2>
          </div>

          {error && <div style={{ color: "red" }}>{error}</div>} {/* Error display */}

          <div className="d-flex justify-content-between">
            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Customer Name</label>
              </div>
              <input
                className="AddFormInput"
                type="text"
                value={cusName}
                onChange={(e) => setCusName(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4">
            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Age</label>
              </div>
              <input
                className="AddFormInput"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="FormMainIner w-100">
              <label className="textDesignLabel">Phone Number</label>
              <input
                className="AddFormInput"
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="10-digit number"
              />
            </div>
          </div>

          <div className="SearchBar pt-3">
            <SearchBar
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
          </div>

          <div className="timings d-flex justify-content-between pt-4">
            <div className="w-100">
              <div className="">
                <label className="textDesignLabel">Timings</label>
              </div>
              <Select
                className="selectIner"
                options={weekOptions}
                value={timings}
                onChange={(obj) => setTimings(obj)}
              />
            </div>

            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Medicine Per Day</label>
              </div>
              <input
                className="AddFormInput"
                type="number"
                value={medcinePerDay}
                onChange={(e) => setMedcinePerDay(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Quantity</label>
              </div>
              <input
                className="AddFormInput"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder=""
              />
            </div>
          </div>

          <div className="mainBtn mt-5 mb-3">
            <Button
              type="button" // Changed to button instead of submit
              className="mainBtnIner w-100"
              size="lg"
              onClick={onSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
