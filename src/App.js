import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Loginpage from "./NGO_Website/Loginpage";
import Homepage from "./NGO_Website/Homepage";
import Updatelogin from "./NGO_Website/Add&view/AdminLogin/Updatelogin";
import Layout from "./NGO_Website/Layout";
import FrontendLayout from "./NGO_@WEBSITE/FrontendLayout";
import { useSelector } from "react-redux";
import EditLanguage from "./NGO_Website/Add&view/Language/EditLanguage";
import ViewLanguage from "./NGO_Website/Add&view/Language/ViewLanguage";
import AddLanguage from "./NGO_Website/Add&view/Language/AddLanguage";

import ViewAdmin from "./NGO_Website/Add&view/Admin/ViewAdmin";
import AddAdmin from "./NGO_Website/Add&view/Admin/AddAdmin";
import EditAdmin from "./NGO_Website/Add&view/Admin/EditAdmin";

import AddState from "./NGO_Website/Add&view/State/AddState";
import EditState from "./NGO_Website/Add&view/State/EditState";
import ViewState from "./NGO_Website/Add&view/State/ViewState";

import AddSlider from "./NGO_Website/Add&view/Slider/AddSlider";
import EditSlider from "./NGO_Website/Add&view/Slider/EditSlider";
import ViewSlider from "./NGO_Website/Add&view/Slider/ViewSlider";

import AddCountry from "./NGO_Website/Add&view/Country/AddCountry";
import ViewCountry from "./NGO_Website/Add&view/Country/ViewCountry";
import EditCountry from "./NGO_Website/Add&view/Country/EditCountry";

import AddPages from "./NGO_Website/Add&view/Pages/AddPages";
import EditPages from "./NGO_Website/Add&view/Pages/EditPages";
import ViewPages from "./NGO_Website/Add&view/Pages/Viewpages";

import AddVolunteer from "./NGO_Website/Add&view/Volunteer/AddVolunteer";
import EditVolunteer from "./NGO_Website/Add&view/Volunteer/EditVolunteer";
import ViewVolunteer from "./NGO_Website/Add&view/Volunteer/ViewVolunteer";

import AddTakepledge from "./NGO_Website/Add&view/Takepladge/AddTakepladge";
import ViewTakepledge from "./NGO_Website/Add&view/Takepladge/ViewTakepladge";
import EditTakepledge from "./NGO_Website/Add&view/Takepladge/EditTakepladge";

import ViewProgrmms from "./NGO_Website/Add&view/Progrmmes/ViewProgrmms";
import EditProgrmms from "./NGO_Website/Add&view/Progrmmes/EditProgrmms";
import AddProgrmms from "./NGO_Website/Add&view/Progrmmes/AddProgrmms";

import AddDonation from "./NGO_Website/Add&view/Donation/AddDonation";
import EditDonation from "./NGO_Website/Add&view/Donation/EditDonation";
import ViewDonation from "./NGO_Website/Add&view/Donation/ViewDonation";
import ViewContact from "./NGO_Website/Add&view/Contact/ViewContact";
import AddOurimpact from "./NGO_Website/Add&view/Ourimpact/AddOurimpact";
import EditOurimpact from "./NGO_Website/Add&view/Ourimpact/EditOurimpact";
import ViewOurimpact from "./NGO_Website/Add&view/Ourimpact/ViewOurimpact";
import ViewRegistervolunteer from "./NGO_Website/Add&view/Registervolunteer/ViewRegistervolunteer";
import ViewCmsblock from "./NGO_Website/Add&view/Cmsblock/ViewCmsblock";
import Menubar from "./NGO_@WEBSITE/Menubar";
import Donatenow from "./NGO_@WEBSITE/Donatenow";
import Whatwedo from "./NGO_@WEBSITE/Whatwedo";
import Volunteer from "./NGO_@WEBSITE/Volunteer";
import Takepladge from "./NGO_@WEBSITE/Takepladge";
import Program from "./NGO_@WEBSITE/Program";
import Footer from "./NGO_@WEBSITE/Footer";
import Home from "./NGO_@WEBSITE/Home";
import Contact from "./NGO_@WEBSITE/Contact";
export default function App() {
  const { loginStatus } = useSelector((state) => state.login);
  console.log(loginStatus);
  // let loginStatus =false
  return (
    <div>
      <Routes>
        <Route element={loginStatus ? <Layout /> : <Navigate to={"/Homepage"} />}>
          <Route path="/" exact element={<Homepage />} />

          <Route path="/AddState" exact element={<AddState />} />
          <Route path="/ViewState" exact element={<ViewState />} />
          <Route path="/EditState" exact element={<EditState />} />

          <Route path="/AddLanguage" exact element={<AddLanguage />} />
          <Route path="/ViewLanguage" exact element={<ViewLanguage />} />
          <Route path="/EditLanguage" exact element={<EditLanguage />} />
          <Route path="/AddCountry" exact element={<AddCountry />} />
          <Route path="/ViewCountry" exact element={<ViewCountry />} />
          <Route path="/EditCountry" exact element={<EditCountry />} />

          <Route path="/AddPages" exact element={<AddPages />} />
          <Route path="/ViewPages" exact element={<ViewPages />} />
          <Route path="/EditPages" exact element={<EditPages />} />

          <Route path="/AddVolunteer" exact element={<AddVolunteer />} />
          <Route path="/ViewVolunteer" exact element={<ViewVolunteer />} />
          <Route path="/EditVolunteer" exact element={<EditVolunteer />} />

          <Route path="/AddSlider" exact element={<AddSlider />} />
          <Route path="/ViewSlider" exact element={<ViewSlider />} />
          <Route path="/EditSlider" exact element={<EditSlider />} />

          <Route path="/AddOurimpact" exact element={<AddOurimpact />} />
          <Route path="/ViewOurimpact" exact element={<ViewOurimpact />} />
          <Route path="/EditOurimpact" exact element={<EditOurimpact />} />

          <Route path="/AddTakepledge" exact element={<AddTakepledge />} />
          <Route path="/ViewTakepledge" exact element={<ViewTakepledge />} />
          <Route path="/EditTakepledege" exact element={<EditTakepledge />} />

          <Route path="/AddProgrmms" exact element={<AddProgrmms />} />
          <Route path="/ViewProgrmms" exact element={<ViewProgrmms />} />
          <Route path="/EditProgrmms" exact element={<EditProgrmms />} />

          <Route path="/AddDonation" exact element={<AddDonation />} />
          <Route path="/ViewDonation" exact element={<ViewDonation />} />
          <Route path="/EditDonation" exact element={<EditDonation />} />
          <Route path="/ViewCmsblock" exact element={<ViewCmsblock />} />
          <Route
            path="/ViewRegistervolunteer"
            exact
            element={<ViewRegistervolunteer />}
          />
          <Route path="/Updatelogin" exact element={<Updatelogin />} />
          <Route path="ViewContact" exact element={<ViewContact />} />
          <Route path="AddAdmin" exact element={<AddAdmin />} />
          <Route path="EditAdmin" exact element={<EditAdmin />} />
          <Route path="ViewAdmin" exact element={<ViewAdmin />} />
        </Route>
        <Route path="/login" exact element={<Loginpage />} />
       
        <Route element={<FrontendLayout />}>
        <Route path="/Homepage" exact element={<Home />} />
          <Route path="/Donatenow" exact element={<Donatenow />} />
          <Route path="/Whatwedo" exact element={<Whatwedo />} />
          <Route path="/Volunteer" exact element={<Volunteer />} />
          <Route path="/Takepladge" exact element={<Takepladge />} />
          <Route path="/Program" exact element={<Program />} />

          <Route path="/Contact" exact element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

// function FrontendLayout() {
//   return (
//     <div>
//       <Menubar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }