import React from "react"
import LetsTravel from "../../assets/img/Let’sTravel.png"
const Header = React.memo(() => {
  // console.log("Header")
  return (
    <header className="">
      <div className="container-fluid border-bottom border-secondary border-5 rounded">
        <div className="container">
          <img src={LetsTravel} className="" alt="logo" />
        </div>
      </div>
    </header>
  )
})

export default Header
