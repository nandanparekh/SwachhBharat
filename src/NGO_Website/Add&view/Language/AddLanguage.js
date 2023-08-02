import React from "react";
import "./AddLanguage.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AddLanguage() {
  const [languagecode, setLanguagecode] = useState();
  const { loginStatus } = useSelector((state) => state.login);
  const [languagename, setLanguagename] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();

    let data = {
      languageCode: languagecode,
      languageName: languagename,
      status: status,
    };
    axios
      .post("http://localhost:3001/api/language/", data, {
        headers: { Authorization: `Bearer ${loginStatus}`,}
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/Viewlanguage")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="ADdstaTe">
      <form onSubmit={handleSubmit} className="box">
        <div>
          <h4 className="Ad">Add Language</h4>
        </div>
        <div className="Line"></div>
        <div className="Languagecode">
          <label>
            <b>Language code :</b>
          </label>
          <select
            value={languagecode}
            onChange={(e) => setLanguagecode(e.target.value)}
            style={{ marginLeft: "25px", width: "50%" }}
          >
            <option>~Select Language Code~</option>
            <option>gu (gujarati)</option>
            <option>eng (english)</option>
            <option>hin(hindi)</option>
            <option>ban(bangali)</option>
            <option>other</option>
          </select>
        </div>
        <div className="Languagecode">
          <label>
            <b>Language Name :</b>
          </label>
          <input
            type="text"
            value={languagename}
            onChange={(e) => setLanguagename(e.target.value)}
            style={{ marginLeft: "17px", width: "50%" }}
            placeholder="Language Name  "
          />
        </div>
        <div className="Languagecode">
          <label>
            <b>Status :</b>
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ marginLeft: "90px", width: "50%" }}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="zzz">
          <div
            onClick={() => {
              navigate("/ViewLanguage");
            }}
          >
            <button className="mx-4 btn btn-primary">back</button>
          </div>
          <div>
            <button type="submit" className=" mx-4 btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
