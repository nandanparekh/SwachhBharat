import React, { useState } from "react";
import "./AddProgrmms.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function AddProgrmmes() {
  const [place, setPlace] = useState("");

  const [description, setDescription] = useState("");
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [bannerimage, setBannerimage] = useState();
  const [thisplace, setThisplace] = useState();
  const [status, setStatus] = useState("");

  const [volunteer, setVolunteer] = useState("");
  const [date, setDate] = useState();
  const [people, setPeople] = useState();
  const [area, setArea] = useState();
  const [trained, setTrained] = useState();
  const [defaultimage, setDefaultimage] = useState("");
  const [programimage, setProgramimage] = useState("");

  const { loginStatus } = useSelector((state) => state.login);

  const naviagte = useNavigate();

  function Addform(e) {
    e.preventDefault();
    // let data = {
    //   sliderTitle: slidertitle,
    //   description: description,
    //   image: image,
    //   status: status,
    // };
    // console.log(data);
    // if (image && slidertitle && status && description) {
    console.log(loginStatus);
    let formData = new FormData();

    formData.append("programme_place", place);
    formData.append("description", description);
    formData.append("why_this_place", thisplace);
    formData.append("state", state);

    formData.append("city", city);
    formData.append("volunteers", volunteer);
    formData.append("date", date);
    formData.append("people_benefited", people);
    formData.append("image",bannerimage[0])
    formData.append("area_cover", area);
    formData.append("youths_trained", trained);
    formData.append("status", status);

    axios
      .post("http://localhost:3001/api/programmes/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",

          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          naviagte("/ViewProgrmms");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //     } else {
    //       alert("enter the data");
    //     }
  }
console.log(bannerimage)
  return (
    <div className="maindiv">
      <form className="BOX" onSubmit={Addform}>
        <div>
          <h4 className="AddstatE"> Add Program</h4>
        </div>
        <div className="Line"></div>
        <div className="LanguageCODE">
          <label>
            <b>Program Place:</b>
          </label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Program Place"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>
        <div className="Description">
          <label>
            <b>Description:</b>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginLeft: "17px", width: "50%" }}
            placeholder="Description "
          />
        </div>

        <div className="Whythisplace">
          <label>
            <b>Why this place:</b>
          </label>
          <input
            type="text"
            value={thisplace}
            onChange={(e) => setThisplace(e.target.value)}
            placeholder="Why this place"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="State">
          <label>
            <b> State:</b>
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State name"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="City">
          <label>
            <b>City:</b>
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>
        <div className="Volunteer">
          <label>
            <b>Volunteer:</b>
          </label>
          <input
            type="text"
            value={volunteer}
            onChange={(e) => setVolunteer(e.target.value)}
            placeholder="No if Volunteer"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="Date">
          <label>
            <b>Date:</b>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="enter date"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="PeopleBenefited">
          <label>
            <b>People Benefited:</b>
          </label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="People Benefited"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="Languagecode">
          <label>
            <b>Area cover ( in km ):</b>
          </label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Area Cover"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="YouthsTrained">
          <label>
            <b>Youths Trained:</b>
          </label>
          <input
            type="text"
            value={trained}
            onChange={(e) => setTrained(e.target.value)}
            placeholder="Youths Trained"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>

        <div className="BannerImage">
          <label>
            <b> Banner Image:</b>
          </label>
          <input
            type="file"
            onChange={(e) => setBannerimage(e.target.files)}
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div>
        {/* <div className="BannerImage">
          <label>
            <b>Default Image:</b>
          </label>
          <input
            type="file"
            onChange={(e) => setDefaultimage(e.target.files)}
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div> */}

        {/* <div className="ProgrammsImage">
          <label>
            <b> Programms Image:</b>
          </label>
          <input
            type="file"
            onChange={(e) => setProgramimage(e.target.files)}
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div> */}
        <div className="Status">
          <label>
            <b>Status :</b>
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ marginLeft: "50px", width: "50%" }}
          >
            <option value={"active"}>Active</option>
            <option value={"Inactive"}>Inactive</option>
          </select>
        </div>

        <div className="BUTTON">
          <button
            className="button mx-2"
            onClick={() => {
              naviagte("/Viewprogrmms");
            }}
          >
            back
          </button>

          <button type="submit" className="button mx-2">
            save
          </button>
        </div>
      </form>
    </div>
  );
}
