import React from "react"
import "./assets/scss/all.scss"

import Navbar from "./components/layout/Navbar"
import Header from "./components/layout/Header"

import SelectRegion from "./components/SelectRegion"
import RegionList from "./components/RegionList"
import { detectScrollAndGetNewData, conditionForUrlChange } from "./components/helpers/detectScroll"

function App() {
  detectScrollAndGetNewData()
  conditionForUrlChange()
  return (
    <div className="App">
      <Navbar />
      <Header className="" />
      <main className="mb-5">
        <SelectRegion />
        <RegionList />
      </main>

      <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"></svg>
    </div>
  )
}

export default App
