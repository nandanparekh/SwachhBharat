// import React from "react";
// import "./Menubar.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// export default function Menubar() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState("");
//   const [phone, setPhone] = useState("");
//   return (
//     <div className="w">
//       <div className="Photofirst">
//         <img
//           src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/slider/thumb/1920_5d399e9e0a908.jpg"
//           class="d-block w-100"
//           alt="slider - Your Support"
//         ></img>
//       </div>

//       <div className="english">
//         <select>
//           <option>english</option>
//           <option>hindi</option>
//           <option>korian</option>
//         </select>
//       </div>
//       <div className="Menubar">
//         <div>
//           <img
//             src="https://staging.webmynehost.com/swachh-bharat/images/logo.png"
//             alt="Swachh Bharat Mission"
//           ></img>
//         </div>

//         <div>WHAT WE DO</div>
//         <div>PROGRAMMES</div>
//         <div>VOLUNTEER</div>
//         <div>TAKE A PLADGE</div>
//         <div>CONTACT US</div>
//         <div className="Donatenow">DONATE NOW</div>
//       </div>
//       <div className="Your">
//         <aside className="aside">Your Support</aside>
//         <p className="P"> Keep Your City Clean And Live Healthy</p>

//         <button className="get">Get Support</button>
//       </div>

//       <div className="abc">
//         <div className="A"></div>
//         <div className="B">
//           <p className="VolunteeringWork">Volunteering Work?</p>
//           <p className="VolunteeringWorK">
//             test content test content test content test content test content
//             test content test content test content test content test content
//             test content
//           </p>

//           <button className="Applynow">Apply Now</button>
//         </div>
//         <div className="C"></div>
//       </div>

//       <div className="abC">
//         <div className="about">
//           <h4>ABOUT OUR FOUNDATION</h4>

//           <p className="Test">
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//           </p>
//         </div>

//         <div className="Img">
//           {" "}
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/cms/5d2304c997e5b.jpg"></img>{" "}
//         </div>
//       </div>
//       <div className="impacT">
//         <h3>OUR IMPACT</h3>
//       </div>

//       <div className="XT">
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5d3e881af30ff.jpg"></img>
//         </div>
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5d3e8831bfd07.jpg"></img>
//         </div>
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5d3e883b21c4c.jpg"></img>
//         </div>
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5d3e8845135c3.jpg"></img>
//         </div>
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5d3e88508515c.jpg"></img>
//         </div>
//         <div className="gapphoto">
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/ourimpact/thumb/257_5e9440458ce75.jpg"></img>
//         </div>
//       </div>

//       <div className="Help">
//         <div className="HELP">
//           <b>NEED YOUR</b>
//           <h1>HELP</h1>
//         </div>
//         <div className="HELP">
//           <div>
//             <div>
//               <label>Name*</label>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder=" Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 style={{ height: "50px", width: "120%" }}
//               />
//             </div>
//           </div>
//           <div className="Helping">
//             <div>
//               <label>Helping Amount*</label>
//             </div>
//             <div>
//               <input
//                 type="number"
//                 placeholder=" Helping Amount"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 style={{ height: "50px", width: "120%" }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="HELP">
//           <div>
//             <div>
//               <div>
//                 <label>Email Address*</label>
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder=" Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={{ height: "50px", width: "120%" }}
//                 />
//               </div>
//             </div>

//             <div className="HelpinG">
//               <button className="xyt">
//                 {" "}
//                 <h4>DONATE</h4>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="HELP">
//             <div>
//               <label>Phone*</label>
//             </div>
//             <div>
//               <input
//                 type="number"
//                 placeholder=" Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 style={{ height: "50px", width: "120%" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Donate ">
//         <div>
//           {" "}
//           <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/cms/5d230611321cb.jpg"></img>
//         </div>
//         <div className="vision">
//           <h3>Vision & Mission</h3>
//           <p>
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content
//           </p>
//         </div>
//       </div>
//       <div className="volunteer">
//         {" "}
//         <h3>OUR VOLUNTEERS</h3>
//       </div>
//       <div className="threeimg">
//         <div className="threediv">
//           {" "}
//           <div>
//             <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5e65ecbd55ae5.jpg"></img>
//           </div>
//           <div className="pkp">
//             <h5 className="mkp">Xiarch</h5>
//             <p>
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content
//             </p>
//           </div>
//         </div>
//         <div className="threediv">
//           {" "}
//           <div>
//             <img src="https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5e65ecad57422.jpg"></img>
//           </div>
//           <div className="pkp">
//             <h5 className="mkp">Mukesh</h5>
//             <p>
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content
//             </p>
//           </div>
//         </div>
//         <div>
//           {" "}
//           <div>
//             <img src="	https://staging.webmynehost.com/swachh-bharat-CMS/storage/app/volunteer/thumb/360_5d81df21124ad.jpg"></img>
//           </div>
//           <div className="pkp">
//             <h5 className="mkp">Himani Patel</h5>
//             <p>
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="Call">
//         <div className="callicon">
//           {" "}
//           <img src="https://staging.webmynehost.com/swachh-bharat/images/phone.png"></img>
//         </div>
//         <div className="now">
//           <h3>CALL US NOW!</h3>
//           <p>
//             Test Content Test Content Test Content Test Content Test Content
//             Test Content
//           </p>
//         </div>
//         <div className="digit">
//           <h4 className="Mobileno">8490957541</h4>
//         </div>
//       </div>
//       <div className="footer">
//         <div className="footerdiv">
//           <div className="About">
//             <h4>ABOUT US</h4>
//             <p>
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content Test Content Test Content
//               Test Content Test Content Test Content
//             </p>
//           </div>
//           <div>
//             <button className="fbutton">TERMS</button>
//             <button className="Fbutton  mx-1 ">PRIVACY POLICY</button>
//           </div>
//         </div>
//         <div className="footerdiv">
//           <div className="About">
//             <p>
//               Webmyne Systems Pvt. Ltd. 702, Ivory Terrace, Opp. Circuit House,
//               RC Dutt Road, Jetalpur, Vadodara
//             </p>

//             <p> info[at]webmyne[dot]com</p>
//           </div>

//           <div>
//             <button className="xyT">
//               {" "}
//               <h5>DONATE</h5>
//             </button>
//           </div>
//         </div>
//         <div className="footerdiv">
//           <div>
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/footer-logo.png"></img>
//           </div>
//           <div className="sociallink">
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/social-1.png"></img>
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/social-2.png"></img>
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/social-3.png"></img>
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/social-4.png"></img>
//             <img src="https://staging.webmynehost.com/swachh-bharat/images/social-5.png"></img>
//           </div>
//           <div className="AbouT">©2019 Webmyne NGO.</div>
//         </div>
//       </div>
//     </div>
//   );
// }
