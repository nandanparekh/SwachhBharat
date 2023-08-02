import { React, useState, useEffect } from "react";
import "./ViewOurimpact.css";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";
export default function ViewOurimpact() {
  const [page, setPage] = useState(25);
  const naviagte = useNavigate();
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState(item);
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
        items.title?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.status?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/impact/?page=1&size=${page}`, {
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
            <h4 className="Statelistp">Ourimpact List</h4>
          </div>
          <div
            className="Addstatef"
            onClick={() => {
              naviagte("/AddOurimpact");
            }}
          >
            <button className="mx-4 my-3 Adddd">Add Ourimpact</button>
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
        <div style={{ marginLeft: "1010px", marginTop: "-24px" }}>
          <label>Search</label>
          <input type="search" onChange={(e) => handleSearchClick(e)} />
        </div>
        <div className="Line"></div>

        <div className="d-flex justify-content-center align-items-center ">
          <table className="Table">
            <tr>
              <th> Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Image</th>

              <th>Action</th>
            </tr>

            {product?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.title}</td>
                <td>{items.status} </td>
                <td>
                  <img
                    src={`http://localhost:3001/uploads/${items?.image}`}
                    height={250}
                    width={250}
                  />
                </td>

                <td>
                  <div>
                    <Link to={"/EditOurimpact"} state={items}>
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
