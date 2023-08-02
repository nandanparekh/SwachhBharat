import { React,useEffect, useState } from "react";
import "./ViewLanguage.css";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
export default function ViewLanguage() {
  const [page, setPage] = useState(25);
  const navigate = useNavigate();
  // const [formData, setFormdata] = useState([]);
  const { loginStatus } = useSelector((state) => state.login);
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState(item);

  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(item);
      return;
    }
    const filterBySearch=item.filter((items)=>{
      if(
items._id?.toLowerCase().includes(e.target.value?.toLowerCase())||
item.languageCode?.toLowerCase().includes(e.target.value?.toLowerCase())||
items.languageName?.toLowerCase().includes(e.target.value?.toLowerCase())||
item.status?.toLowerCase().includes(e.target.value?.toLowerCase())

      ){return item;}
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/language/?page=1&size=${page}`, {
        headers: { Authorization: `Bearer ${loginStatus}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data.data);
           setItem(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div className="maindiv">
      <form className="form">
        <div className="header">
          <div>
            <h4 className="Languagelistr">Language List</h4>
          </div>
          <button
            className="mk"
            onClick={() => {
              navigate("/AddLanguage");
            }}
          >
            <h6 className="Addlanguage">Add Language </h6>
          </button>
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
        <div className="Search">
          <label>Search:</label>
          <input
            type="search"
            onChange={(e) => handleSearchClick(e)}
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div className="Line"></div>
        <div className="TablE">
          <table className="table  ">
            <tr>
              <th>id</th>
              <th>Language code</th>
              <th>Language name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {product?.map((items) => (
              <tr>
                <td>{items._id}</td>
                <td>{items.languageCode} </td>
                <td>{items.languageName}</td>
                <td>{items.status}</td>
                <div>
                  <Link to={"/EditLanguage"} state={items}>
                    <p className=" mx-2">Edit</p>
                  </Link>
                </div>
              </tr>
            ))}
          </table>
        </div>
      </form>
    </div>
  );
}
