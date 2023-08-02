import React from "react";
// import Homepage from "../Homepage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./AddCountry.css";
import axios from "axios";
export default function AddCountry() {
  const naviagte = useNavigate();

  const [country, setCountry] = useState(" ");

  const [code, setCode] = useState("");
  const { loginStatus } = useSelector((state) => state.login);
  function Addform(e) {
    e.preventDefault();
    if (country && code) {
      console.log(loginStatus);
      let data = { countryTitle: country, isdnCode:code };
      axios
        .post("http://localhost:3001/api/country/", data, {
          headers: {
            Authorization: `Bearer ${loginStatus}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/ViewCountry");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("enter the data");
    }
  }
  return (
    <div className="maindiv">
      <form className="box" onSubmit={Addform}>
        <div>
          <h4 className="AddState">Add Country</h4>

          <div className="Line"></div>
        </div>
        <div className="margincountry">
          <label>Country*</label>

          <input
            value={country}
            placeholder="country"
            onChange={(e) => setCountry(e.target.value)}
            style={{ width: "50%", height: "30px" }}
          />
        </div>
        <div className="margincountry">
          <label>ISD Code*</label>
          <input
            type="text"
            value={code}
            placeholder="isd code"
            onChange={(e) => setCode(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>

        <div className="BUTTON">
          <Link to={"/ViewCountry"}></Link>
          <button
            className="btn btn-secondary mb"
            onClick={() => {
              naviagte("/ViewCountry");
            }}
            style={{ width: "10%", marginLeft: "45px" }}
          >
            BACK
          </button>
          <button
            type="submit"
            className="mx-3 btn btn-primary"
            style={{ width: "10%" }}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}
