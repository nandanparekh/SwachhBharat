import React, { useState } from "react";
import "./AddOurimpact.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function AddOurimpact() {
  const [title, setTitle] = useState("");

  

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

      formData.append("title", title);
      
      formData.append("image", image[0]);
      formData.append("status", status);

      axios
        .post("http://localhost:3001/api/impact/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${loginStatus}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            naviagte("/ViewOurimpact");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    // } else {
    //   alert("enter the data");
    // }
  }

  return (
    <div className="maindiv">
      <form className="box" onSubmit={Addform}>
        <div>
          <h4 className="AddstatE">Add Ourimpact</h4>
        </div>
        <div className="Line"></div>
        <div className="Languagecode">
          <label>
            <b>Slider Title:</b>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Slider Title"
            style={{ marginLeft: "25px", width: "50%" }}
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
            <option value={"select"}>---select----</option>
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
              naviagte("/ViewOurimpact");
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
