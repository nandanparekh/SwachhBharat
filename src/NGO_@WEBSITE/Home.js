import { React, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [formdata, setFormData] = useState([]);

  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/noAuth/impact/?page=1&size=40", {})
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
      <div className="PhotofirsT">
        <img
          className="IMG"
          src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/slider/thumb/1920_5d399e9e0a908.jpg"
          alt="slider - Your Support"
        ></img>
      </div>

      <div className="Your">
        <aside className="aside">Your Support</aside>
        <p className="P1"> Keep Your <span className="P">City Clean</span> And <span className="P">Live Healthy</span></p>

        <button className="get">Get Support</button>
      </div>

      <div className="abc">
        <div className="A"></div>
        <div className="B">
          <p className="VolunteeringWork">Volunteering Work?</p>
          <p className="VolunteeringWorK">
            test content test content test content test content test content
            test content test content test content test content test content
            test content
          </p>

          <button className="Applynow">Apply Now</button>
        </div>
        <div className="C"></div>
      </div>

      <div className="abC">
        <div className="about">
          <h4>ABOUT OUR FOUNDATION</h4>

          <p className="Test">
            
            Swachh Bharat is a national cleanliness campaign in India, launched by the Government of India in 2014. It aims to achieve the vision of a clean India by promoting cleanliness, hygiene, and proper sanitation practices.
            If you are referring to a foundation related to the Swachh Bharat campaign, please provide me with more specific information about the foundation so that I can assist you better.
            Swachh Bharat is a national cleanliness campaign in India, launched by the Government of India in 2014. It aims to achieve the vision of a clean India by promoting cleanliness, hygiene, and proper sanitation practices.
            If you are referring to a foundation related to the Swachh Bharat campaign, please provide me with more specific information about the foundation so that I can assist you better.
            Swachh Bharat is a national cleanliness campaign in India, launched by the Government of India in 2014. It aims to achieve the vision of a clean India by promoting cleanliness, hygiene, and proper sanitation practices.
            If you are referring to a foundation related to the Swachh Bharat campaign, please provide me with more specific information about the foundation so that I can assist you better.
          </p>
        </div>

        <div className="Img">
          {" "}
          <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/cms/5d2304c997e5b.jpg"></img>{" "}
        </div>
      </div>
      <div className="impacT">
        <h3>OUR IMPACT</h3>
      </div>
      <div className="bbbbbbbbbb">
        {formdata?.map((items) => (
          <div className="homepageimg">
            <img
              src={`http://localhost:3001/uploads/${items?.image}`}
              height={200}
              width={200}
            />
            <div className="kkkkk">{items.title}</div>
          </div>
        ))}
      </div>
      <div className="Help">
        <div className="HELP">
          <b>NEED YOUR</b>
          <h1>HELP</h1>
        </div>
        <div className="HELP">
          <div>
            <div>
              <label>Name*</label>
            </div>
            <div>
              <input
                type="text"
                placeholder=" Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ height: "50px", width: "120%" }}
              />
            </div>
          </div>
          <div className="Helping">
            <div>
              <label>Helping Amount*</label>
            </div>
            <div>
              <input
                type="number"
                placeholder=" Helping Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ height: "50px", width: "120%" }}
              />
            </div>
          </div>
        </div>
        <div className="HELP">
          <div>
            <div>
              <div>
                <label>Email Address*</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ height: "50px", width: "120%" }}
                />
              </div>
            </div>

            <div className="HelpinG">
              <button className="xyt">
                {" "}
                <h4>DONATE</h4>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="HELP">
            <div>
              <label>Phone*</label>
            </div>
            <div>
              <input
                type="number"
                placeholder=" Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ height: "50px", width: "120%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Donate ">
        <div style={{margin:"9px"}}>
          {" "}
          <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/cms/5d230611321cb.jpg"></img>
        </div>
        <div className="vision">
          <h3>Vision & Mission</h3>
          <p>
          The Swachh Bharat Mission, also known as the Clean India Campaign, has a clear vision and mission to drive its objectives. Here is a brief overview:
          Vision:
          The vision of the Swachh Bharat Mission is to create a clean and hygienic India, ensuring sanitation facilities for all, and promoting cleanliness as a way of life.
          Mission:
          The mission of the Swachh Bharat Mission encompasses various aspects and goals, including:
          Construction of toilets: The mission aims to construct individual household toilets and community toilets to eliminate open defecation and ensure access to sanitation facilities for all.
          Behavioural change: It focuses on promoting behavioral changes among individuals and communities to adopt cleanliness practices, proper waste management, and hygiene behaviors.Vision:
          The vision of the Swachh Bharat Mission is to create a clean and hygienic India, ensuring sanitation facilities for all, and promoting cleanliness as a way of life.
          Mission:
          The mission of the Swachh Bharat Mission encompasses various aspects and goals.
          </p>
        </div>
      </div>
      <div className="volunteer">
        {" "}
        <h3>OUR VOLUNTEERS</h3>
      </div>
      <div className="threeimg">
        <div className="threediv">
          {" "}
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5e65ecbd55ae5.jpg"></img>
          </div>
          <div className="pkp">
            <h5 className="mkp">Xiarch</h5>
            <p>
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content
            </p>
          </div>
        </div>
        <div className="threediv">
          {" "}
          <div>
            <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5e65ecad57422.jpg"></img>
          </div>
          <div className="pkp">
            <h5 className="mkp">Mukesh</h5>
            <p>
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <img src="	https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5d81df21124ad.jpg"></img>
          </div>
          <div className="pkp">
            <h5 className="mkp">Himani Patel</h5>
            <p>
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content Test Content Test Content
              Test Content Test Content Test Content
            </p>
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
};

export default Home;
