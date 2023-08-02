import "./ViewSlider.css";

import { useEffect, useState, React } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function ViewSlider() {
  const [page, setPage] = useState(25);
  const { loginStatus } = useSelector((state) => state.login);
  const [item, setItem] = useState([]);
  // const [formData, setFormData] = useState(item);
  const [product, setProduct] = useState(item);
  const naviagte = useNavigate();

  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(item);
      return;
    }
    console.log(e.target.value);
    const filterBySearch = item.filter((items) => {
      // console.log(items);
      if (
        items._id?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.sliderTitle
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase()) ||
        items.description?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/slider/?page=1&size=${page}`, {
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
    <div className="maindiv">
      <form className="box">
        <div className="header">
          <div>
            <h4 className="addState">Slider List</h4>
          </div>
          <div
            onClick={() => {
              naviagte("/AddSlider");
            }}
          >
            <button className="mx-4 my-3 ADD">Addslider</button>
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
          <input onChange={(e) => handleSearchClick(e)} type="search" />
        </div>
        <div className="Line"></div>
        <div className="d-flex justify-content-center align-items-center ">
          <table
            style={{ width: "100%", marginTop: "20px", background: "white" }}
          >
            <tr>
              <th> Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {product?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.sliderTitle}</td>
                <td>{items.description} </td>
                <td>
                  <img
                    src={`http://localhost:3001/uploads/${items.image}`}
                    alt={items._id}
                    height={200}
                    width={200}
                  />
                </td>
                <td>{items.status} </td>

                <td>
                  <div>
                    <button className=" mx-2">
                      {" "}
                      <Link to={"/EditSlider"} state={items}>
                        Edit
                      </Link>
                    </button>

                    {/* <button>Delete</button> */}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </form>
    </div>
  );
}
