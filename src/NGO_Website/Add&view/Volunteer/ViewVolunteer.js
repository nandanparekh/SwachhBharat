import { React, useEffect, useState } from "react";
import "./ViewVolunteer.css";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";
export default function ViewVolunteer() {
  const [one, setOne] = useState(1);

  const [page, setPage] = useState(30);
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

    const filterBySearch = item.filter((items) => {
      if (
        items._id?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.volunteerTitle
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase()) ||
        items.description
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase()) ||
        items.status?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/noAuth/volunteerData/?page=${one}&size=${page}`,
        {
          headers: {
            Authorization: `Bearer ${loginStatus}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data.data);
          setItem(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, one]);
  console.log(item.length);
  // console.log(one)
  return (
    <div className="Maindiv">
      <div className="Box">
        <div className="Header">
          <div>
            <h4 className="Statelist">Volunteer List</h4>
          </div>
          <div
            className="Addstatee"
            onClick={() => {
              naviagte("/AddVolunteer");
            }}
          >
            <button className="mx-4 my-3 Adddd">Add Volunteer</button>
          </div>
        </div>
        <div className="margincountrY">
          <label>Show</label>

          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            style={{ width: "10%", height: "30px" }}
          >
            <option value={2}> 2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div style={{ marginLeft: "1010px", marginTop: "-25px" }}>
          <label>Search</label>
          <input type="search" onChange={(e) => handleSearchClick(e)} />
        </div>
        <div className="Line"></div>

        <div className="d-flex justify-content-center align-items-center ">
          <table className="Table TablE">
            <tr>
              <th> Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Image</th>
              <th>Action</th>
            </tr>

            {product?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.volunteerTitle}</td>
                <td>{items.description} </td>
                <td>{items.status} </td>
                <td>
                  <img
                    src={`http://localhost:3001/uploads/${items?.image}`}
                    height={50}
                    width={50}
                  />
                </td>

                <td>
                  <div>
                    <Link to={"/EditVolunteer"} state={items}>
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
        <div className="Line"></div>

        <div className="PG">
          <div>
            <p>Showing  {item.length} entries</p>
          </div>

          <div className="pagination">
            <div className="paginationwidth">
              <button>Previous</button>
            </div>
            <div className="paginationwidth">
              {" "}
              <button value={1} onClick={(e) => setOne(e.target.value)}>
                1
              </button>
            </div>
            <div className="paginationwidth">
              <button value={2} onClick={(e) => setOne(e.target.value)}>
                2
              </button>
            </div>
            <div className="paginationwidth">
              <button value={3} onClick={(e) => setOne(e.target.value)}>
                3
              </button>
            </div>

            <div>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
