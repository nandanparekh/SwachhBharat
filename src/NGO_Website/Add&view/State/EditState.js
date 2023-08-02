import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export default function EditState() {
  const naviagte = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  console.log(location, "location");

  const { loginStatus } = useSelector((state) => state.login);

  function updateform(e) {
    e.preventDefault();
    let data = { country: name, stateTitle: title };
    axios
      .put(`http://localhost:3001/api/state/${location.state._id}`, data, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          naviagte("/ViewState");
          setName("");
          setTitle("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (location.state) {
      setName(location.state.country);
      setTitle(location.state.stateTitle);
    }
  }, [location.state]);
  console.log(name, title);
  return (
    <div className="maindiv">
      <form
        onSubmit={updateform}
        className="App"
        style={{
          backgroundColor: "#e9ecef",
          color: "white",
          padding: "7px",
        }}
      >
        <div>
          <h1 className="AddState">Edit state</h1>
        </div>
        <div className="mb-3 ">
          <label style={{ color: "black" }}>Country*</label>

          <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "50%", height: "30px" }}
          >
            <option> select country</option>
            <option value={"India"}> india</option>
            <option value={"china"}>china</option>
            <option value={"pakistan"}>pakistan</option>
            <option value={"usa"}>usa</option>
          </select>
        </div>
        <div className="mb-4">
          <label style={{ color: "black" }}>State Title*</label>
          <input
            type="text"
            value={title}
            placeholder="state title"
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>

        <div>
          
          <button
            className="btn btn-secondary mb"
            onClick={() => {
              naviagte("/ViewState  ");
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
           Update
          </button>
        </div>
      </form>
    </div>
  );
}
