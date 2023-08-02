import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerdiv ">
        <div className="About">
          <h4 className="about_footer">ABOUT US</h4>
          <p>
          With 20+ years of experience we have covered major industry verticals globally. We have served small and mid-sized companies as well as big enterprises. 
          </p>
        </div>
        <div>
          <button className="fbutton">TERMS</button>
          <button className="Fbutton  mx-1 ">PRIVACY POLICY</button>
        </div>
      </div>
      <div className="footerdiv1">
        <div className="About">
          <span className="icons_address-footer"><i class="fa fa-map-marker"></i></span>
          <p><span className="footer_address_details"></span>
            Webmyne Systems Pvt. Ltd. 702, Ivory Terrace, Opp. Circuit House, RC
            Dutt Road, Jetalpur, Vadodara
          </p>

          {/* <p> info[at]webmyne[dot]com</p> */}
        </div>

        {/* <div>
          <Link to = "/Donatenow" className="donate-btn">
            {" "}
            <h5>DONATE</h5>
          </Link>
        </div> */}
      </div>
      <div className="footerdiv2">
        <div>
          <img src="https://staging.webmynehost.com/swachh-bharat/images/footer-logo.png"></img>
        </div>
        <div className="sociallink">
          <img src="https://staging.webmynehost.com/swachh-bharat/images/social-1.png"></img>
          <img src="https://staging.webmynehost.com/swachh-bharat/images/social-2.png"></img>
          <img src="https://staging.webmynehost.com/swachh-bharat/images/social-3.png"></img>
          <img src="https://staging.webmynehost.com/swachh-bharat/images/social-4.png"></img>
          <img src="https://staging.webmynehost.com/swachh-bharat/images/social-5.png"></img>
        </div>
        <div className="AbouT">©2019 Webmyne NGO.</div>
      </div>
    </div>
  );
}
