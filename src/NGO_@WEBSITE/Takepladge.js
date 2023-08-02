import React from 'react'
import "./Takepladge.css"
export default function Takepladge() {
  return (
    <div className="wk">
      <div className="">
        <img
          className="Firstimage"
          src="https://staging.webmynehost.com/swachh-bharat/images/Pledge-banner.jpg"
        ></img>
      </div>
      <div className="WhaT">
        <p className="WHAT">Take a pledge</p>
      </div>

      <div className="MaindivAppLYNow">
        <div className="APPLYnOW"> APPLY NOW</div>
        <div className="BELOWAPPLYNOW"></div>
        <div className="inputfield">
          <div>
            <label className="InpuTfield">Name*</label>
            <br></br>
            <input className="InputfieLd" type="text" />
          </div>

          <div>
            {" "}
            <label className="InputFielD1">Email Adress*</label>
            <br></br>
            <input className="InpuTfielD1" type="email" />
          </div>
        </div>

        <div className="inputfield">
          <div className="InputFielD1">
            <label className="InpuTfield">Phone*</label>
            <br></br>
            <input type="tel" className="InputFielD2" />
          </div>
          <div className="InputFielD1">
            <label className="InpuTfield">State / Province / Region*</label>
            <br></br>
            <select className="InputFielD2">
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
            <input type="text" className="InputFielD2" />
          </div>
        </div>

        <div className="message">
          <label className="InpuTfield">Message * (Min 120 Characters )</label>
          <br></br>
          <input type="text" className="messagE" />
        </div>

        <div className="inputfield">
          <div className="beLow">
            <button className="ROBOT">I AM NOT A ROBOT</button>
          </div>
          <div className="bELoW">
            <button className="SUBMIt1">SUBMIT</button>
          </div>
        </div>
      </div>

      <div>
        <img
          className="pledge"
          src="https://staging.webmynehost.com/swachh-bharat/images/program-bg.jpg"
        ></img>
        <div className="PLEDGE">
          {" "}
          <h3>OUR IMPACT</h3>
        </div>
        <div className="white3">
          <div className="whitediv">
            <h4 className="PROJECT">PROJECTS</h4>
            <p className="PROJECt">06</p>
          </div>
          <div className="whitediv">
            <h4 className="PROJECT">CITES</h4>
            <p className="PROJECt">06</p>
          </div>
          <div className="whitediv">
            <h4 className="PROJECT">STATE</h4>
            <p className="PROJECt">03</p>
          </div>
        </div>
      </div>

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
      <div className="abovefooter"></div>
    </div>
  );
}
