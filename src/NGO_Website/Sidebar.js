import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
// import AddState from "./Add&view/State/AddState";
// import Viewstate from "./Add&view/State/ViewState";
import { useNavigate } from "react-router-dom";
// import { AiOutlineArrowDown } from "react-icons/ai";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { AiFillDashboard } from "react-icons/ai";
export default function Sidebar() {
  const  [selectmenu,setSelectMenu] = useState({
    name:"",open: false
  })

  // console.log(sidebar);
  return (
    <div className="sidebar">
      <div className="logo-details">
      {/* <i className='bx bx-landscape'></i> */}
      <Link to = "/" className="logo_name">
        <span >Master</span>
      </Link>
      </div>
    <ul className="nav-links">
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"state",open:  selectmenu.name==="state" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">State</span>
        </Link>
        {selectmenu.name==="state"  && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }
        
        </div>
        <ul className= {`${selectmenu.name==="state"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewState">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddState">Add Pages</Link></li>
        </ul>
      </li>
      
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"language", open:  selectmenu.name==="language" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Language</span>
        </Link>
        {selectmenu.name==="language"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }        
        </div>
        <ul className={`${selectmenu.name==="language"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewLanguage">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddLanguage">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"country", open:  selectmenu.name==="country" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Country</span>
        </Link>
        {selectmenu.name==="country"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }        
        </div>
        <ul className={`${selectmenu.name==="country"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewCountry">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddCountry">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"pages", open:  selectmenu.name==="pages" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Pages</span>
        </Link>
        {selectmenu.name==="pages"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="pages"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewPages">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddPages">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"volunteer", open:  selectmenu.name==="volunteer" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Volunteer</span>
        </Link>
        {selectmenu.name==="volunteer"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="volunteer"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewVolunteer">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddVolunteer">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"sliders", open:  selectmenu.name==="sliders" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Sliders</span>
        </Link>
        {selectmenu.name==="sliders"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="sliders"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewSlider">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddSlider">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"ownimpact", open:  selectmenu.name==="ownimpact" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Ownimpact</span>
        </Link>
        {selectmenu.name==="ownimpact"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="ownimpact"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewallOurimpact">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddOurimpact">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"Takeapledge", open:  selectmenu.name==="Takeapledge" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Takeapledge</span>
        </Link>
        {selectmenu.name==="Takepledge"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="Takeapledge"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewTakepledge">View All</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"Programmes", open:  selectmenu.name==="Programmes" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Programmes</span>
        </Link>
        {selectmenu.name==="Progrmmrs"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="Programmes"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewProgrmms">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddProgrmms">Add Pages</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"Donation", open:  selectmenu.name==="Donation" ?!selectmenu.open: true})}}>
        <Link to =''> 
        <i class='bx bxl-meta'></i>
        <span className="link_name">Donation</span>
        </Link>
        {selectmenu.name==="Donation"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="Donation"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewDonation">View All</Link></li>
        </ul>
      </li>
      <li>
      <div className="icon-link" onClick={()=>{setSelectMenu({name:"Registervolunteer", open:  selectmenu.name==="Registervolunteer" ?!selectmenu.open: true})}}>
        <Link to =''>
        <i class='bx bxl-meta'></i>
        <span className="link_name">Registervolunteer</span>
        </Link>
        {selectmenu.name==="Registervolunteer"   && selectmenu.open ===true? <i class='bx bxs-chevron-down'></i> : <i class='bx bxs-chevron-left' ></i> }                </div>
        <ul className={`${selectmenu.name==="Registervolunteer"   && selectmenu.open ===true? "" : "sub-menu"}`}>
        <li className='dd-tem-center'> <Link to ="/ViewRegistervolunteer">View All</Link></li>
        {/* <li className='dd-tem-center'> <Link to ="/AddNew">Add Pages</Link></li> */}
        </ul>
      </li>
      <div className="logo-details">
      {/* <i className='bx bx-landscape'></i> */}
      <Link to = "/" className="logo_name">
        <span >Setup</span>
      </Link>
      </div>
    <li>
    <div className="icon-link" onClick={()=>{setSelectMenu({name:"Cmsblock", open:  selectmenu.name==="Cmsblock" ?!selectmenu.open: true})}}>
      <Link to =''>
      <i class='bx bxl-meta'></i>
      <span className="link_name">Cmsblock</span>
      </Link>
      <i class='bx bxs-chevron-left' ></i>
      </div>
      <ul className={`${selectmenu.name==="Cmsblock"   && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewCmsblock">View All</Link></li>
          {/* <li className='dd-tem-center'> <Link to ="/AddNew">Add Pages</Link></li> */}
        </ul>
    </li>
    <li>
    <div className="icon-link" onClick={()=>{setSelectMenu({name:"Contacts", open:  selectmenu.name==="Contacts" ?!selectmenu.open: true})}}>
      <Link to =''>
      <i class='bx bxl-meta'></i>
      <span className="link_name">Contacts</span>
      </Link>
      <i class='bx bxs-chevron-left' ></i>
      </div>
      <ul className={`${selectmenu.name==="Contacts" && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewContact">View All</Link></li>
          {/* <li className='dd-tem-center'> <Link to ="/AddNew">Add Pages</Link></li> */}
        </ul>
    </li>
    <li>
    <div className="icon-link" onClick={()=>{setSelectMenu({name:"Admin", open:  selectmenu.name==="Admin" ?!selectmenu.open: true})}}>
      <Link to =''>
      <i class='bx bxl-meta'></i>
      <span className="link_name">Admin</span>
      </Link>
      <i class='bx bxs-chevron-left' ></i>
      </div>
      <ul className={`${selectmenu.name==="Admin"  && selectmenu.open ===true? "" : "sub-menu"}`}>
          <li className='dd-tem-center'> <Link to ="/ViewAdmin">View All</Link></li>
          <li className='dd-tem-center'> <Link to ="/AddAdmin">Add Pages</Link></li>
        </ul>
        </li>
      </ul>
    </div>
  );
}
