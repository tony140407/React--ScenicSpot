import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ScenicCardFactory } from "./helpers/templateFactory/scenicCardFactory"

import CardModal from "./CardModal"
function RegionList() {
  return (
    <div className="bg-light py-5">
      <CardModal />

      <Switch>
        <Route key="otherCity" path="/scenicSpot/:cityName" component={ScenicCardFactory} />
        <Route key="index" path="/scenicSpot" component={ScenicCardFactory} />
        {/* index放下面，以防換成 city 時 仍是index */}
      </Switch>
    </div>
  )
}

export default RegionList
