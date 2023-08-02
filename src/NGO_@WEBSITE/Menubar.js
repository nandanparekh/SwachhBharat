import React from "react";
import "./Menubar.css";
import { useNavigate } from "react-router-dom";
export default function Menubar() {
const navigate=useNavigate()
  return (
    <div className="wl">
      <div className="english">
        {/* <select className="selection">
          <option>english</option>
          <option>hindi</option>
          <option>korian</option>
        </select> */}
      </div>
      <div className="Menubar">
        <div
          onClick={() => {
            navigate("/Homepage");
          }}
          className="cursor1"
        >
          <img
            src="https://staging.webmynehost.com/swachh-bharat/images/logo.png"
          ></img>
        </div>

        <div
          onClick={() => {
            navigate("/Whatwedo");
          }}
          className="cursor"
        >
          WHAT WE DO
        </div>
        <div
          className="cursor"
          onClick={() => {
            navigate("/Program");
          }}
        >
          PROGRAMMES{" "}
        </div>
        <div
          className="cursor"
          onClick={() => {
            navigate("/Volunteer");
          }}
        >
          VOLUNTEER
          <span className="src-only"></span>
        </div>
        <div
          className="cursor"
          onClick={() => {
            navigate("/Takepladge");
          }}
        >
          TAKE A PLEDGE
        </div>
        <div
          className="cursor"
          onClick={() => {
            navigate("/Contact");
          }}
        >
          CONTACT US
        </div>
        <div
          className="Donatenow cursoR "
          onClick={() => {
            navigate("/Donatenow");
          }}
        >
          DONATE NOW
        </div>
      </div>
    </div>
  );
}
