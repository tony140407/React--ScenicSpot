import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./assets/scss/all.scss"

import Navbar from "./components/layout/Navbar"
import Header from "./components/layout/Header"
import RegionList from "./components/RegionList"
import { detectScroll } from "./components/helpers/js/detectScroll"

function App() {
  // 偵測網頁滾動，改變state，決定何時需要多要資料
  detectScroll()

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header className="" />
        <main className="mb-5">
          <RegionList />
        </main>
      </div>
    </Router>
  )
}

export default App
