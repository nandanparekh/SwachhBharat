import React from "react";
import "./ViewPages.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export default function ViewPages() {
  const naviagte = useNavigate();
  const [page, setPage] = useState(25);
  const [formData, setFormData] = useState([]);
  function DeleteState(id) {}
  const { loginStatus } = useSelector((state) => state.login);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/pages/?page=1&size=${page}`, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setFormData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <div className="Maindiv">
      <div className="Box">
        <div className="Header">
          <div>
            <h4 className="Statelist">Custom Pages List</h4>
          </div>
          <div
            className="AddstateD"
            onClick={() => {
              naviagte("/AddPages");
            }}
          >
            <button className="mx-4 my-3 Addf">Add Custom Page</button>
          </div>
        </div>
        <div className="margincountrY">
          <label>Show</label>

          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            style={{ width: "10%", height: "30px" }}
          >
            <option value={10}> 10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div style={{ marginLeft: "1010px", marginTop: "-27px" }}>
          <label>Search</label>
          <input type="search" />
        </div>
        <div className="Line"></div>

        <div className="d-flex justify-content-center align-items-center">
          <table className="Table">
            <tr>
              <th> Id</th>
              <th> page Title</th>
              <th>Page url</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {formData?.map((items) => (
              <tr>
                <td>{items._id}</td>
                {/* <td>{items.}</td>
                <td>{items.} </td>
                <td>{items.}</td>
                <td>{items.} </td> */}

                <td>
                  <div>
                    <Link to={"/EditPages"} state={items}>
                      <p className=" mx-2">Edit</p>
                    </Link>
                    {/* <button
                      onClick={() => {
                        DeleteState(items.id);
                      }}
                    >
                      Delete
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
