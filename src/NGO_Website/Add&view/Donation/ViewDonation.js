import React from "react";
import "./ViewDonation.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export default function ViewDonation() {
  const naviagte = useNavigate();
 const [page, setPage] = useState(25);
  const [formData, setFormData] = useState([]);
  function DeleteState(id) {}
  const { loginStatus } = useSelector((state) => state.login);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/pledge/?page=1&size=${page}`, {
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
            <h4 className="Statelist">Donation list</h4>
          </div>

          <div x>
            <h4 className="mx-4 my-3 color">Total Donation Amount:</h4>
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Amount</th>
              <th>Txnid</th>
              <th>Status</th>
            </tr>

            {formData?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.name}</td>
                <td>{items.email} </td>
                <td>{items.phone}</td>
                <td>{items.amount} </td>
                <td>{items.txnid} </td>
                <td>{items.status} </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
