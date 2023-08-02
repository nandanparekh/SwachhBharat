import { React, useEffect, useState } from "react";
import "./Volunteer.css";

import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Volunteer() {
  
  const [formdata, setFormData] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [select, setSelect] = useState();
  const [city, setCity] = useState();
  const [msg, setMsg] = useState();




  function Addform(e) {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      mobile: phone,
      state: select,
      city: city,
      pledge: msg,
      
    };
    console.log(data);
    
      axios
        .post("http://localhost:3001/api/auth/volunteers/register", data)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/noAuth/volunteerData/?page=1&size=50", {
        
      })
      .then((res) => {
        if (res.status === 200) {
          setFormData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wk">
      <div className="">
        <img
          className="Firstimage"
          src="https://staging.webmynehost.com/swachh-bharat/images/VOLUNTEERS-banner.jpg"
        ></img>
      </div>
      <div className="WhaT">
        <p className="WHAT">OUR VOLUNTEERS</p>
      </div>

      <div className="below">
        <div className="top_performer">
          <h2 className="TOPPERFORMER">TOP PERFORMER</h2>
        </div>
        <div className="aPPLYNOW">
          <a className="APPLYNOW123" href="#foo">
            APPLY NOW
          </a>
        </div>
      </div>

      <div className="website">
        <div className=" pagination">
          {formdata?.map((items) => (
            <div>
              <img
                className="ggggggggggg"
                src={`http://localhost:3001/uploads/${items?.image}`}
                height={200}
                width={300}
              />
              <div className=" RRRRRRR">
                <div className="">{items.status}</div>
                <div style={{ width: 300 }}>{items.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="foo" className="MaindivApplyNow">
        <div className="APPLYnOW"> APPLY NOW</div>
        <div className="BELOWAPPLYNOW"></div>

        <form onSubmit={Addform}>
          <div className="inputfield">
            <div>
              <label className="InpuTfield">Name*</label>
              <br></br>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="Inputfield"
                type="text"
              />
            </div>

            <div>
              {" "}
              <label className="InputFielD">Email Adress*</label>
              <br></br>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="InputfielD"
                type="email"
              />
            </div>
          </div>

          <div className="inputfield">
            <div className="InputFielD1">
              <label className="InpuTfield">Phone*</label>
              <br></br>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="InputFielD2"
              />
            </div>
            <div className="InputFielD1">
              <label className="InpuTfield">State / Province / Region*</label>
              <br></br>
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="InputFielD2"
              >
                <option> SELECT STATE</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>

                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>

                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>

                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
            </div>
            <div className="InputFiElD1">
              <label className="InpuTfield">City*</label>
              <br></br>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="InputFielD2"
              />
            </div>
          </div>

          <div className="message">
            <label className="InpuTfield">
              Message * (Min 120 Characters )
            </label>
            <br></br>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              className="messagE"
            />
          </div>

          <div className="inputfield">
            <div className="beLow">
              <button className="ROBOT">I AM NOT A ROBOT</button>
            </div>
            <div className="bELow">
              <button type="submit" className="SUBMIt">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>

        <div className="call1">
      <div className="CALL">
        <div className="callicon">
          {" "}
          <img src="https://staging.webmynehost.com/swachh-bharat/images/phone.png"></img>
        </div>
        <div className="now">
          <h3>CALL US NOW!</h3>
          <p>
            Test Content Test Content Test Content Test Content Test Content
            Test Content
          </p>
        </div>
        <div className="digit">
          <h4 className="Mobileno">8490957541</h4>
        </div>
        </div>
      </div>
      <div className="abovefooter"></div>
    </div>
  );
}
