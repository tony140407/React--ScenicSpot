import React, { useState, useMemo, useCallback } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ScenicCardFactory } from "./helpers/templateFactory/scenicCardFactory"

import CardModal from "./CardModal"
const RegionList = React.memo(() => {
  return (
    <div className="bg-light py-5">
      <CardModal />

      <Switch>
        <Route key="index" path="/scenicSpot/:cityName" render={() => <ScenicCardFactory />} />
        <Route key="index" path="/scenicSpot" render={() => <ScenicCardFactory />} />
        <Route
          key="firstPage"
          path="/"
          component={() => {
            return (
              <p className="text-center">請點選右上按鈕 或 網址列後方加上 /scenicSpot 做切換</p>
            )
          }}
        />
      </Switch>
    </div>
  )
})

export default RegionList
