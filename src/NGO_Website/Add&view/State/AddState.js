import React from "react";
// import Homepage from "../Homepage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./AddState.css"
import axios from "axios";
export default function AddState() {
  const naviagte = useNavigate();

  const [name, setName] = useState(" ");

  const [title, setTitle] = useState("");
  const { loginStatus } = useSelector((state) => state.login);
  function Addform(e) {
    e.preventDefault();
    if (name && title) {
      console.log(loginStatus);
      let data = { country: name, stateTitle: title };
      axios
        .post("http://localhost:3001/api/state/", data, {
          headers: {
            Authorization: `Bearer ${loginStatus}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/ViewState");
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
          <h4 className="AddState">Add State</h4>

          <div className="Line"></div>
        </div>
        <div className="margincountry">
          <label>Country*</label>

          <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "50%", height: "30px" }}
          >
            <option> select country</option>
            <option> india</option>
            <option>china</option>
            <option>pakistan</option>
            <option>usa</option>
          </select>
        </div>
        <div className="margincountry">
          <label >State Title*</label>
          <input
            type="text"
            value={title}
            placeholder="state title"
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>

        <div className="BUTTON">
          <Link to={"/ViewState"}></Link>
          <button
            className="btn btn-secondary mb"
            onClick={() => {
              naviagte("/ViewState");
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
