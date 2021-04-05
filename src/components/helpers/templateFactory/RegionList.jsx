import React from "react"

function SelectRegion(props) {
  return (
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
}

export default SelectRegion
