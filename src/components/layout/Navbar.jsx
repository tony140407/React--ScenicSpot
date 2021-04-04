import React, { useState, useEffect } from "react"
import cityName from "../../../public/GeoJSON/CH-EN_TW_CITY.json"
import { useDispatch, useSelector } from "react-redux"
import { changeCity } from "../../redux/actions/themeAction"
import { Dropdown } from "bootstrap"
function Navbar() {
  const dispatch = useDispatch()
  let [btn, setBtn] = useState([])
  const city = useSelector((state) => state.city)
  useEffect(() => {
    let btnArray = []
    let cityArr = Object.keys(cityName)

    cityArr.forEach((eachCity) => {
      let enCityName = cityName[eachCity]
      btnArray.push(
        <li key={eachCity}>
          <a
            className={"dropdown-item " + (city == enCityName ? "active" : "")}
            href="#"
            onClick={() => dispatch(changeCity(enCityName))}
          >
            {eachCity}
          </a>
        </li>
      )
    })
    setBtn(btnArray)
  }, [city])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                切換各縣市
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {btn}
              </ul>
            </div>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
