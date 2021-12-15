import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import cityName from "../../assets/json/CH-EN_TW_CITY.json"
import { Dropdown } from "bootstrap"

const Navbar = React.memo(() => {
  let [btn, setBtn] = useState([])
  const city = useSelector((state) => state.city)
  // console.log("Navbar")
  useEffect(() => {
    let btnArray = []
    let cityArr = Object.keys(cityName)

    cityArr.forEach((eachCity) => {
      let enCityName = cityName[eachCity]
      let component
      if (enCityName == " " || !enCityName) {
        component = (
          <li key={eachCity}>
            <Link
              to="/React--ScenicSpot/"
              className={"dropdown-item " + (city == enCityName ? "active" : "")}
              href="#"
            >
              {eachCity}
            </Link>
          </li>
        )
      } else {
        component = (
          <li key={eachCity}>
            <Link
              to={enCityName}
              className={"dropdown-item " + (city == enCityName ? "active" : "")}
              href="#"
            >
              {eachCity}
            </Link>
          </li>
        )
      }
      btnArray.push(component)
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
        </div>
      </div>
    </nav>
  )
})
export default Navbar
