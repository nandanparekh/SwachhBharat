import React from "react";
import "./HomePage.css";
import { Link,useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate=useNavigate();
  return (
    <>
      <div className="parent">
        <div className="dashboard-start">
          <h1 className="title-dashboard">Dashboard</h1>
          <ol className="header-content">
            <li>
              <i className="fa fa-dashboard"></i>
              <Link to="/ViewProgrmms" className="Home">
                Home
              </Link>
            </li>
            <li className="title-opacity">
              <i class="bx bx-chevron-right"></i>
            </li>
            <li className="title-opacity">Dashboard</li>
          </ol>
        </div>

      <div className="main-parent">
        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">1</h1>
              <p>Total Programmes </p>
            </div>
            <div className="icon">
              <i class="fa fa-users"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewProgrmms" className="info">More Info</Link>
          </div>
        </div>

      

        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">2</h1>
              <p>Total Donors</p>
            </div>
            <div className="icon">
              <i class="fa fa-tasks"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewDonation" className="info">More Info</Link>
          </div>
        </div>


        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">3</h1>
              <p>Total take a pledge </p>
            </div>
            <div className="icon">
              <i class="fa fa-users"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewTakepledge" className="info">More Info</Link>
          </div>
        </div>
      </div>

      <div className="main-parent">
        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">4</h1>
              <p>Total our impact</p>
            </div>
            <div className="icon">
              <i class="fa fa-tasks"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewOurimpact" className="info">More Info</Link>
          </div>
        </div>


        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">5</h1>
              <p>Total join volunteers</p>
            </div>
            <div className="icon">
              <i class="fa fa-users"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewVolunteer" className="info">More Info</Link>
          </div>
        </div>

        <div className="main">  
          <div className="parent-item">
            <div class="inner">
              <h1 className="h1">6</h1>
              <p>Total apply </p>
            </div>
            <div className="icon">
              <i class="fa fa-users"></i>
            </div>
          </div>
          <div className="footer-contant">
            <Link to="/ViewRegistervolunteer" className="info">More Info</Link>
          </div>
        </div>
      </div>
        

      </div>
    </>
  );
}
// /ViewProgrmms
// /ViewDonation
// /ViewTakepledge
// /ViewOurimpact
// /ViewVolunteer
// /ViewRegistervolunteer
