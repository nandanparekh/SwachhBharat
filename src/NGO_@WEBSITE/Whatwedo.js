import React from "react";
import "./whatwedo.css";
export default function Whatwedo() {
  return (
    <div className="wk">
      <div>
        <img
          className="Firstimage"
          src="https://staging.webmynehost.com/swachh-bharat/images/about-banner.jpg"
        ></img>
      </div>
      <div className="whaT">
        <h1 className="what">What We Do</h1>
      </div>
      <div className="maindiv2">
        <div>
          <h4>PURPOSE</h4>
          <p className="paragaph">
            {" "}
            Clean India Campaign for CMS NGO.
          </p>
        </div>
        <div className="paragaph1">
          <div>
            <p><span className="whatwedo_icon"><i class='bx bx-select-multiple'></i></span>
            The main aim of this campaign is to clean and spread the message of awareness.
            </p>
            <p><span className="whatwedo_icon"><i class='bx bx-select-multiple'></i></span>
            The purpose of this campaign is to clean all the towns and villages of India..
            </p>
            <p><span className="whatwedo_icon"><i class='bx bx-select-multiple'></i></span>
            Anyone can take part in drive being at any place.
            </p>
            <p><span className="whatwedo_icon"><i class='bx bx-select-multiple'></i></span>
            Donor can donate the money as per individual wish.
            </p>
            
          </div>

          <div>
            <img
              className="greenimage"
              src="https://staging.webmynehost.com/swachh-bharat/images/Green-india.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="Call">
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
