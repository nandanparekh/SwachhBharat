import React, { useState } from "react";
import "./AddVolunteer.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function AddVolunteer() {
  const [volunteertitle, setVolunteerrtitle] = useState("");

  const [description, setDescription] = useState("");

  const [image, setImage] = useState();

  const [status, setStatus] = useState("");

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

      formData.append("volunteerTitle", volunteertitle);
      formData.append("description", description);
      formData.append("image", image[0]);
      formData.append("status", status);

      axios
        .post("http://localhost:3001/api/volunteersData/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${loginStatus}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/ViewVolunteer");
          }
        })
        .catch((err) => {
          console.log(err);
        });
//     } else {
//       alert("enter the data");
//     }
   }

  return (
    <div className="maindiv">
      <form className="box" onSubmit={Addform}>
        <div>
          <h4 className="AddstatE">Add Volunteer</h4>
        </div>
        <div className="Line"></div>
        <div className="Languagecode">
          <label>
            <b>Volunteer Title:</b>
          </label>
          <input
            type="text"
            value={volunteertitle}
            onChange={(e) => setVolunteerrtitle(e.target.value)}
            placeholder="Slider Title"
            style={{ marginLeft: "25px", width: "50%" }}
          />
        </div>
        <div className="Languagecode">
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
        <div className="Languagecode">
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
        <div className="Languagecode">
          <label>
            <b>Image:</b>
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files)}
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div>
        <div className="BUTTON">
          <button
            className="button mx-2"
            onClick={() => {
              naviagte("/ViewVolunteer");
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
