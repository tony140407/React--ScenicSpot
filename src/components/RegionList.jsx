import React, { useMemo } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ScenicCardFactory } from "./helpers/templateFactory/scenicCardFactory"

import CardModal from "./CardModal"
const RegionList = React.memo(() => {
  // console.log("list")
  // const paramsCityName = useMemo(() => ({ cityName: "" }), [])
  const paramsCityName = (paramsCityName) => useMemo(() => paramsCityName, [])
  return (
    <div className="bg-light py-5">
      <CardModal />

      <Switch>
        <Route
          key="otherCity"
          path="/scenicSpot/:cityName"
          component={(routerProps) => (
            <ScenicCardFactory cityName={paramsCityName(routerProps.match.params.cityName)} />
          )}
        />
        <Route key="index" path="/scenicSpot" component={ScenicCardFactory} />

        {/* <Route key="otherCity" path="/scenicSpot/:cityName" component={ScenicCardFactory} /> */}

        <Route
          key="firstPage"
          path="/"
          component={() => {
            return (
              <p className="text-center">請點選右上按鈕 或 網址列後方加上 /scenicSpot 做切換</p>
            )
          }}
        />
        {/* index放下面，以防換成 city 時 仍是index */}
      </Switch>
    </div>
  )
})

export default RegionList
