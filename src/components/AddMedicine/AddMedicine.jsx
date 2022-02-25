import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./AddMedicine.css";

const AddMedicine = () => {
  const [medicineName, setMdicineName] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [batchNo, setBatchNo] = useState("");
  const [mfg, setMfg] = useState("");
  const [exp, setExp] = useState("");
  const onSubmitBtn = () => {
    console.log(medicineName, inventory, batchNo, mfg, exp);

    axios
      .post("http://localhost:3001/api/MedicineForm", {
        medicineName: medicineName,
        inventory: inventory,
        mfg: mfg,
        exp: exp,
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
      <div className="px-3"></div>
      <div
        style={{ fontFamily: "Work Sans" }}
        className=" d-flex justify-content-center m-auto py-5  "
      >
        <div className="AddMedicineMainPadding">
          <div className="px-4 py-4">
            <div className="formMain py-4 ">
              <h2
                style={{
                  color: "#000",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                Add New Medicine
              </h2>
            </div>
            <div className="d-flex justify-content-between">
              <div className="FormMainIner w-100">
                <div className="">
                  <label className="textDesignLabel">Medi No</label>
                </div>
                <input
                  className="AddFormInput"
                  type="number"
                  placeholder=""
                  onChange={(e) => setMdicineName(e.target.value)}

                  // value={cusName}
                />
              </div>
              <div className="FormMainIner w-100">
                <label className="textDesignLabel">Inventory Quantity </label>

                <input
                  className="AddFormInput"
                  type="number"
                  placeholder=""
                  // value={phoneNo}
                  onChange={(e) => setInventory(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between pt-4 ">
              <div className="FormMainIner w-100">
                <div className="">
                  <label className="textDesignLabel">MFG Date</label>
                </div>
                <input
                  className="AddFormInput"
                  type="date"
                  placeholder=""
                  onChange={(e) => setMfg(e.target.value)}
                />
              </div>
              <div className="FormMainIner w-100">
                <div className="">
                  <label className="textDesignLabel">Expire Date</label>
                </div>
                <input
                  className="AddFormInput"
                  type="date"
                  // onChange={medcinePerDay}
                  onChange={(e) => setExp(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>

            <div className="mainBtn mt-5 mb-3">
              <Button
                type="submit"
                className=" mainBtnIner w-100 "
                size="lg"
                onClick={onSubmitBtn}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
