import React from "react";
import "./ViewCountry.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";
export default function ViewCountry() {
  const naviagte = useNavigate();
const [page, setPage] = useState(25);
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState(item);
  const [formData, setFormData] = useState([]);
  function DeleteState(id) {}
  const { loginStatus } = useSelector((state) => state.login);

  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(item);
      return;
    }
    const filterBySearch = item.filter((items) => {
      if (
        items._id?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.countryTitle
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase()) ||
        items.isdnCode?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });

    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/country/?page=1&size=${
        page
      }`, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setItem(res.data.data);
          setProduct(res.data.data);
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
            <h4 className="Statelist">Country List</h4>
          </div>
          <div
            className="Addstatem"
            onClick={() => {
              naviagte("/AddCountry");
            }}
          >
            <button className="mx-4 my-3 Addw">AddCountry</button>
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
        <div style={{ marginLeft: "1010px", marginTop: "-25px" }}>
          <label>Search</label>
          <input type="search" onChange={(e) => handleSearchClick(e)} />
        </div>
        <div className="Line"></div>

        <div className="d-flex justify-content-center align-items-center TablE">
          <table className="Table">
            <tr>
              <th> Id</th>
              <th> Country Name</th>
              <th>State Name</th>
              <th>Action</th>
            </tr>
            

            {product?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.countryTitle}</td>
                <td>{items.isdnCode} </td>

                <td>
                  <div>
                    <Link to={"/EditCountry"} state={items}>
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
