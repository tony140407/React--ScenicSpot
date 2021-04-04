import React, { useState, useEffect } from "react"
import axios from "axios"
const Counter = (props) => {
  //   const [count, setCount] = useState(0)
  useEffect(() => {
    axios("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON")
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(`Error: ${error}`))
  }, [])
  return (
    <div>
      <p>
        {/* <button onClick={() => props.setCount(() => props.count + 1)}>
          count is: {props.count}
        </button> */}
      </p>
    </div>
  )
}

export default Counter
