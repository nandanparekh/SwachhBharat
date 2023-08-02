import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequestSucess } from "./Redux/Action/authAction";
import axios from "axios";
import "./Login.css";

export default function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
  
    let data = { email: email, password: password };
    console.log(data);

    axios
      .post("http://localhost:3001/api/noAuth/users/login", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          navigate("/");
          dispatch(loginRequestSucess(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div style={{backgroundImage: "linear-gradient(208deg,rgba(255,128,69,0.4),rgba(57,142,220,0.4))" }}>
      <div className="login-div">
        <div className="main-div">

          <h1>SwachhBharat</h1>
    

          <form onSubmit={HandleSubmit}>
            <div className="center1">
              <p className="title-loginpage">Sign in to Start your session</p>
              <input value={email} onChange={(e)=> setEmail(e.target.value)} className="label" type="text" placeholder="E-mail Address" id="email" name="E-mail" />
              <br />
              <input value={password} onChange ={(e) => setPassword(e.target.value)} className="label" type="password" placeholder="Password" id="password" name="Password"/>
              <br />
              <button type="submit" className="submit41">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
