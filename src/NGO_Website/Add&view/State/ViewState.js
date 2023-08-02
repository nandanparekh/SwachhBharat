import React from "react";
import "./ViewState.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CiAlarmOn } from "react-icons/ci";
export default function ViewState() {
  const naviagte = useNavigate();
  // const [name, setName] = useState(" ");
  const [page, setPage] = useState(25);
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState(item);

  // const [formData, setFormData] = useState([]);
  function DeleteState(id) {}
  const { loginStatus } = useSelector((state) => state.login);

  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(item);
      return;
    }
    console.log(e.target.value);
    const filterBySearch = item.filter((items) => {
      console.log(items);
      if (
        items._id?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.country?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.stateTitle?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/state/?page=1&size=${page}`, {
        // headers: {
        //   Authorization: `Bearer ${loginStatus}`,
        // },
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
            <h4 className="Statelist">State List</h4>
          </div>
          <div
            className="Addstateh"
            onClick={() => {
              naviagte("/AddState");
            }}
          >
            <button className="mx-4 my-3 Add">AddState</button>
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
        <div style={{ marginLeft: "1010px",marginTop:"-27px" }}>
          <label>Search</label>
          <input onChange={(e) => handleSearchClick(e)} type="search" />
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
                <td>{items.country}</td>
                <td>{items.stateTitle} </td>

                <td>
                  <div>
                    <Link to={"/EditState"} state={items}>
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
