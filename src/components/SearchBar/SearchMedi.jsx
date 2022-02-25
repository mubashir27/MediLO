import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { SearchData } from "./SearchData";
import "./SearchMedi.css";

import axios from "axios";

const SearchMedi = ({ selectedData, setSelectedData }) => {
  const [filter, setFilter] = useState([]);
  const [wordEnter, setWordEnter] = useState([]);
  const [wordEnterr, setWordEnterr] = useState("");

  const [SearchDataBackend, setSearchDataBackend] = useState([]);

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get("http://localhost:3001/");
    console.log(resp.data.data);
    setSearchDataBackend(resp.data.data);
  };

  // const [selectedData, setSelectedData] = useState([]);

  // haider work
  const [selecedValue, setSelecedValue] = useState();

  // let searchWordd = null;
  const onFiller = (e) => {
    const searchWord = e.target.value;
    const searchWordd = e.target.value;

    setWordEnterr(searchWord);
    const newFilter = SearchDataBackend.filter((value) => {
      return value.MEDI_NAME.toLocaleLowerCase().includes(
        searchWord.toLocaleLowerCase()
      );
    });
    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
    console.log("121" + searchWordd);
    // clearInput(searchWordd);
    setWordEnter(searchWordd);
  };

  const testing = (data) => {
    console.log("first :", data);
    // setSelecedValue(data);
    setWordEnter(data);

    setFilter([]);
  };

  const handleAddRequest = () => {
    setSelectedData([...selectedData, wordEnter]);
    console.log(selectedData);
  };

  return (
    <div className="searchMain">
      <div className="searchInput">
        <div className="">
          <label className="textDesignLabel">Search Medicine</label>
        </div>
        <input
          className="AddFormInput"
          type="text"
          value={wordEnter}
          onChange={onFiller}
        />
        <Button onClick={handleAddRequest} className="mx-3" size="md">
          Add
        </Button>
      </div>
      {filter.length != 0 && (
        <div className="dataResult">
          {filter.slice(0, 10).map((data) => (
            <div
              className="dataResultInerMain"
              // onClick={}
              onClick={() => testing(data.MEDI_NAME)}
            >
              <p className="showData">
                {data.MEDI_NAME}{" "}
                <p style={{ fontSize: "12px" }}> {data.MEDI_TYPE} </p>{" "}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedData.map((eachData) => (
        <span key={eachData} className="selectedMedicine mx-2">
          <i class="fa-solid fa-angle-right"></i> <b>{eachData} </b>
        </span>
      ))}
    </div>
  );
};

export default SearchMedi;
