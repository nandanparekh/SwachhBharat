import React from "react";
// import Homepage from "../Homepage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./AddAdmin.css"
import axios from "axios";
export default function AddAdmin() {
  const naviagte = useNavigate();

  const [conformpassword, setConformpassword] = useState(" ");
 const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { loginStatus } = useSelector((state) => state.login);
  function Addform(e) {
    e.preventDefault();
    
      console.log(loginStatus);
      // let data = { country: name, stateTitle: title };
      axios
        .post("http://localhost:3001/api/users/", {
          headers: {
            Authorization: `Bearer ${loginStatus}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/ViewAdmin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } 
  
  return (
    <div className="maindiv">
      <form className="bOx" onSubmit={Addform}>
        <div>
          <h4 className="AddState">Add Admin User</h4>

          <div className="Line"></div>
        </div>

        <div className="margincountry">
          <label>Name*</label>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>
        <div className="margincountry">
          <label>Email*</label>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>

        <div className="password">
          <label>Password*</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>

        <div className="Password">
          <label>Conform Password*</label>
          <input
            type="password"
            value={conformpassword}
            placeholder="conformpassword"
            onChange={(e) => setConformpassword(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>
        <div className="role">
          <label>Role*</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: "50%", height: "30px" }}
          >
            <option> ---select----</option>
            <option> admin</option>
            <option> test admin</option>
          </select>
        </div>

        <div className="BUTTON">
          <Link to={"/ViewAdmin"}></Link>
          <button
            className="btn btn-secondary mb"
            onClick={() => {
              naviagte("/ViewAdmin");
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


