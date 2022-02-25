import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./AddForm.css";
import Select, { components } from "react-select";
import axios from "axios";

const AddForm = () => {
  const [cusName, setCusName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [timings, setTimings] = useState(null);
  const [medcinePerDay, setMedcinePerDay] = useState("");
  const [quantity, setQuantity] = useState("");

  const [selectedData, setSelectedData] = useState([]);

  const weekOptions = [
    { value: "1", label: "1-1-1" },
    { value: "2", label: "1-0-0" },
    { value: "3", label: "1-0-1" },
    { value: "4", label: "0-1-1" },
  ];
  const onSubmit = () => {
    console.log(
      "hello " + cusName,
      phoneNo,
      age,
      timings.value,
      medcinePerDay,
      quantity,
      selectedData
    );

    let str = "";
    selectedData.forEach(function (data) {
      str = str + data + ",";
    });
    console.log(str);

    axios
      .post("http://localhost:3001/api/insert", {
        cusName: cusName,
        phoneNo: phoneNo,
        age: age,
        timing: timings.value,
        medcinePerDay: medcinePerDay,
        quantity: quantity,
        str: str,
      })
      .then(() => {
        alert("Success");
      });
  };
  return (
    <div className="addFormMain">
      <div className="Navbar">
        <Navbar />
      </div>
      <div
        style={{ fontFamily: "Work Sans" }}
        className=" d-flex justify-content-center m-auto py-5  "
      >
        <div className="addFormPadingClass px-4 py-4">
          <div className="formMain py-4 ">
            <h2
              style={{ color: "#000", fontSize: "2.5rem", fontWeight: "bold" }}
            >
              New Order
            </h2>
          </div>
          <div className="d-flex justify-content-between">
            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Coustomer Name</label>
              </div>
              <input
                className="AddFormInput"
                type="text"
                placeholder=""
                // value={cusName}
                onChange={(e) => setCusName(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between pt-4 ">
            <div className="FormMainIner w-100">
              <div className="">
                <label className="textDesignLabel">Age</label>
              </div>
              <input
                className="AddFormInput"
                type="text"
                placeholder=""
                // value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="FormMainIner w-100">
              <label className="textDesignLabel">Phone Number</label>

              <input
                className="AddFormInput"
                type="number"
                placeholder=""
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </div>
          <div className="SearchBar pt-3 ">
            <SearchBar
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
          </div>
          <div className="timings d-flex justify-content-between pt-4">
            <div className="  w-100 ">
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
                <label className="textDesignLabel">Medcine Per Day</label>
              </div>
              <input
                className="AddFormInput"
                type="number"
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
                placeholder=""
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="mainBtn mt-5 mb-3">
            <Button
              type="submit"
              className=" mainBtnIner w-100 "
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
