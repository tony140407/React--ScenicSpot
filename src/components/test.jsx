import React, { useState, useEffect } from "react"
import axios from "axios"
const Counter = (props) => {
  const { cityName } = props.match.params
  console.log(`cityName ${cityName}`)
  return (
    <div>
      <p></p>
    </div>
  )
}

export default Counter
