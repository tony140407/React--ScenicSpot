import React, { useState, useEffect } from "react"
import cityName from "../../../public/GeoJSON/CH-EN_TW_CITY.json"
import { useDispatch, useSelector } from "react-redux"
import { changeCity } from "../../redux/actions/themeAction"
import { Dropdown } from "bootstrap"
function Navbar() {
  const dispatch = useDispatch()
  let [btn, setBtn] = useState([])
  useEffect(() => {
    let btnArray = []
    let cityArr = Object.keys(cityName)

    cityArr.forEach((eachCity) => {
      let enCityName = cityName[eachCity]
      btnArray.push(
        <li key={eachCity}>
          <a className="dropdown-item" href="#" onClick={() => dispatch(changeCity(enCityName))}>
            {eachCity}
          </a>
        </li>
      )
    })
    setBtn(btnArray)
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {btn}
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li> */}
              </ul>
            </div>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
