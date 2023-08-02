import React, { useState, useEffect } from "react";
import "./EditSlider.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function EditSlider() {
  const location = useLocation();
  const [slidertitle, setSlidertitle] = useState("");

  const [description, setDescription] = useState("");

  const [image, setImage] = useState();

  const [status, setStatus] = useState("");

  const { loginStatus } = useSelector((state) => state.login);

  const naviagte = useNavigate();

  function Updateform(e) {
    e.preventDefault();
    
   
      console.log(loginStatus);
      let formData = new FormData();

      formData.append("sliderTitle", slidertitle);
      formData.append("description", description);
      formData.append("image", image[0]);
      formData.append("status", status);

      axios
        .put(
          `http://localhost:3001/api/slider/${location.state._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",

              Authorization: `Bearer ${loginStatus}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/Viewslider");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  }
  useEffect(() => {
    if (location.state) {
      setSlidertitle(location.state.sliderTitle);
      setDescription(location.state.description);
      setImage(location.state.image);
      setStatus(location.state.status);
    }
  }, [location.state]);
  console.log(location, "kkkkkkkkkkkkkkkk");
  return (
    <div className="maindiv">
      <form className="box" onSubmit={Updateform}>
        <div>
          <h4 className="AddstatE">Edit Slider</h4>
        </div>
        <div className="Line"></div>
        <div className="Languagecode">
          <label>
            <b>Slider Title:</b>
          </label>
          <input
            type="text"
            value={slidertitle}
            onChange={(e) => setSlidertitle(e.target.value)}
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
              naviagte("/Viewslider");
             }}
          >
            back
          </button>

          <button type="submit" className="button mx-2">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
