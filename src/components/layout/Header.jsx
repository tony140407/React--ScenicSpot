import React from "react"
import LetsTravel from "../../assets/Let’sTravel.png"
function Header() {
  return (
    <header className="">
      <div className="container border-bottom border-secondary border-5 rounded">
        <img src={LetsTravel} className="" alt="logo" />
      </div>
      {/* <img src={LetsTravel} className="" alt="logo" /> */}
    </header>
  )
}

export default Header
