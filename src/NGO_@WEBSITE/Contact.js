import { React, useState } from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [subject, setSubject] = useState();

  const [msg, setMsg] = useState();

  function Addform(e) {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: msg,
    };
    console.log(data);
    if (name && email && subject && msg) {
      axios.post("http://localhost:3001/api/noAuth/contact", data, {});

      setName("");
      setEmail("");
      setSubject("");
      setMsg("")
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("enter the data");
    }
  }

  return (
    <div className="wk">
      <div className="">
        <img
          className="Firstimage"
          src="https://staging.webmynehost.com/swachh-bharat/images/contact-banner.jpg"
        ></img>
      </div>
      <div className="WhaT">
        <p className="WHAT">Feel Free To Contact Us</p>
      </div>
      <form onSubmit={Addform}>
        <div className="ourofficeMaindiv">
          <div className="x">
            <div>
              <label className="contactmargiN"> Name</label>
              <br></br>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="ContactDiv1"
              />
            </div>
            <div className="contactmargin">
              <label className="contactmargiN"> Email Adress</label>
              <br></br>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="ContactDiv1"
              />
            </div>

            <div className="contactmargin">
              <label className="contactmargiN"> Subject</label>
              <br></br>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="ContactDiv1"
              >
                <option>Choose one</option>
                <option>General Customer Service</option>
                <option>Suggestions</option>
                <option>Product Support</option>
              </select>
            </div>
            <div className="beLow">
              <button className="rOBOT">I AM NOT A ROBOT</button>
            </div>
          </div>
          <div className="x">
            <label className="contactmargiN">Message</label>
            <br></br>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              className="ContactMessage"
            />

            <div className="submitDiv">
              <button type="submit" className="SENDMESSAGE">
                SEND MESSAGE
              </button>
            </div>
          </div>

          <div className="y">
            <h3>Our Office</h3>
            <div className="OurOfficeLine"></div>
            <p className="contactParagraph">
              <b>Webmyne Systems Pvt. Ltd.</b> 702, Ivory Terrace, Opp. Circuit
              House R.C. Dutt Road, Vadodara-07 Gujarat - India
            </p>
            <h5>Contact us</h5>
            <p>helpwebmyne@gmail.com</p>
          </div>
        </div>
      </form>
      <div className="mapcontact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.5020536378!2d73.03300029303715!3d22.
          32204248029837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!
          2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1684132718639!5m2!1sen!2sin"
          width="900"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="CALLcontact">
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
