import React, { useState,useEffect }from "react";
// import Homepage from "../Homepage";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import "./AddCountry.css";
import axios from "axios";
export default function AddCountry() {
  const naviagte = useNavigate();
 const location = useLocation();
  const [country, setCountry] = useState("");

  const [code, setCode] = useState("");
  const { loginStatus } = useSelector((state) => state.login);
  function Updateform(e) {
    e.preventDefault();
    if (country && code) {
      console.log(loginStatus);
      let data = { countryTitle: country, isdnCode:code };
      axios
        .put(`http://localhost:3001/api/country/${location.state._id}`, data, {
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


  useEffect(() => {
    console.log(location.state, "kkkkkkkkkkkkkkkk");
    if (location.state) {
      setCountry(location.state.countryTitle);
      setCode(location.state.isdnCode);
    }
  }, [location.state]);
  console.log(location, "kkkkkkkkkkkkkkkk");
  return (
    <div className="maindiv">
      <form className="box" onSubmit={Updateform}>
        <div>
          <h4 className="AddState">Edit Country</h4>

          <div className="Line"></div>
        </div>
        <div className="margincountry">
          <label>Country*</label>

          <input
          type="text"
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
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
}
