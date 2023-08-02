import React from "react";
import "./Program.css";
export default function Program() {
  return (
    <div className="w">
      <div>
        <img
          className="Firstimage"
          src="https://staging.webmynehost.com/swachh-bharat/images/PROGRAMMES-banner.jpg"
        ></img>
      </div>
      <div className="WhaT">
        <p className="WHAT">Programs</p>
      </div>
      <div className="Maindiv2">
        <div className="Fourimg">
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d81f590da72e.jpg"></img>
            <p className="img1">Kheda</p>
          </div>
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d3589a7bea96.jpg"></img>
            <p className="img1">Bharuch</p>
          </div>
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d35898ee6b73.jpg"></img>
            <p className="img1">Valsad</p>
          </div>
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d81f3bf83332.jpg"></img>
            <p className="img1">Rajkot</p>
          </div>
        </div>

        <div className="FourimG">
          <div className="Fourimg1">
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d81f3af92b9b.jpg"></img>
            <p className="img1">Surat</p>
          </div>

          <div className="Fourimg2">
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/programmes/thumb/257_5d81f3a461017.jpg"></img>
            <p className="img1">Anand</p>
          </div>
        </div>
        <div className="WHITESPACE">
          {/* <button className="FIRST">FIRST</button>
          <button className="FIRST">PREV</button>
          <button className="FIRSt">1</button>
          <button className="FIRST">NEXT</button>
          <button className="FIRST">LAST</button> */}
        </div>
      </div>

      <div>
        <img
          className="PROGRAMIMG1"
          src="https://staging.webmynehost.com/swachh-bharat/images/program-bg.jpg"
        ></img>
        <div className="OURIMPAC1">
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
