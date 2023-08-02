import React from 'react'
import "./Donatenow.css"
export default function Donatenow() {
  return (
    <div className="wk">
      <div className="">
        <img
          className="Firstimage"
          src="	https://staging.webmynehost.com/swachh-bharat/images/donate-banner.jpg"
        ></img>
      </div>
      <div className="WhaT">
        <p className="WHAT">Donate Now</p>
      </div>

      <div className="klklkl">
        <div className="SELECTTHEAMOUNTYOUWISHTODONATE">
          <h4 className="textt">SELECT THE AMOUNT YOU WISH TO DONATE</h4>
        </div>
        <div className="borderlineDonatenow"></div>

        <div className="donateform">
          <div className="HelpingAmounT">
            <label className="donatedata"> Helping Amount*</label>
            <br></br>
            <input type="tet" className="donateinput" />
          </div>
          <div className="HelpingAmount">
            <label className="donatedata"> Name*</label>
            <br></br>
            <input type="tet" className="donateinpuT" />
          </div>
        </div>

        <div className="donateform">
          <div>
            <label className="donatedata">Email Address*</label>
            <br></br>
            <input type="email" className="donateright" />
          </div>
          <div className="donateleft">
            <label className="donatedata">Phone*</label>
            <br></br>
            <input type="number" className="donateright" />
          </div>
          <div className="donateleft">
            <label className="donatedata">PAN number*</label>
            <br></br>
            <input type="tet" className="donateright" />
          </div>
        </div>

        <div className="SELECTTHEAMOUNTYOUWISHTODONATe">
          <h4 className="textt">ADDRESS</h4>
        </div>
        <div className="borderlineDonatenow"></div>

        <div className="donateform">
          <div className="HelpingAmounT">
            <label className="donatedata"> Street Address</label>
            <br></br>
            <input type="tet" className="donateinput" />
          </div>
          <div className="HelpingAmount">
            <label className="donatedata">Address Line 2</label>
            <br></br>
            <input type="tet" className="donateinpuT" />
          </div>
        </div>

        <div className="donateform">
          <div>
            <label className="donatedata">
              Address Line 2 State / Province / Region
            </label>
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
          <div className="DONATEMARGIN">
            <label className="donatedata">City</label>
            <br></br>
            <input type="text" className="DONATEMARGIn" />
          </div>
          <div className="DONATEMARGIN">
            <label className="donatedata">ZIP / Postal Code</label>
            <br></br>
            <input type="text" className="DONATEMARGIn" />
          </div>

          <div className="DONATEMARGIN">
            <label className="donatedata">Country</label>
            <br></br>
            <select className="DONATEMARGin1">
              <option>India</option>
            </select>
          </div>
        </div>

        <div className="inputfield">
          <div className="beLow">
            <button className="ROBOT">I AM NOT A ROBOT</button>
          </div>
          <div className="donatebELow1">
            <button className="donateSUBMIt">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
      <div className="CALLDonatenow">
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
