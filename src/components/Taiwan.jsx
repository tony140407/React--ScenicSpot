import React from "react"
import TaiwanGeo from "../../public/GeoJSON/COUNTY_MOI_1090820.json"
function Taiwan() {
  //   const width = this.$refs.map.offsetWidth.toFixed(),
  //     height = this.$refs.map.offsetHeight.toFixed()
  const width = 500
  const height = 500

  let mercatorScale,
    w = window.screen.width
  if (w > 1366) {
    mercatorScale = 11000
  } else if (w <= 1366 && w > 480) {
    mercatorScale = 9000
  } else {
    mercatorScale = 6000
  }
  //   var path = d3.geo.path().projection(
  //     d3.geo
  //       .mercator()
  //       .center([121, 24])
  //       .scale(mercatorScale)
  //       .translate([width / 2, height / 2.5])
  //   )
  // 讓d3抓svg，並寫入寬高
  //   var svg = d3
  //     .select("#svg")
  //     // .select("body")
  //     // .append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
  //     .attr("viewBox", `0 0 ${width} ${height}`)

  // 讓d3抓GeoJSON檔，並寫入path的路徑
  var url = TaiwanGeo // GeoJSON的檔案路徑
  //   console.log(`GeoJson ${url.features[0].type}`)
  var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}')
  console.log(`typeof url: ${typeof url}`)
  d3.json(obj).then(function (data) {
    console.log(data)
  })
  //   d3.json(url, (error, geometry) => {
  //     console.log(geometry)
  //     if (error) throw error
  //     svg
  //       .selectAll("path")
  //       .data(TaiwanGeo.features)
  //       .enter()
  //       .append("path")
  //       .attr("d", path)
  //       .attr({
  //         // 設定id，為了click時加class用
  //         id: (d) => "city" + d.properties.COUNTYCODE,
  //       })
  //       .on("click", (d) => {
  //         this.h1 = d.properties.COUNTYNAME // 換中文名
  //         this.h2 = d.properties.COUNTYENG // 換英文名
  //         // 有 .active 存在，就移除 .active
  //         if (document.querySelector(".active")) {
  //           document.querySelector(".active").classList.remove("active")
  //         }
  //         // 被點擊的縣市加上 .active
  //         document.getElementById("city" + d.properties.COUNTYCODE).classList.add("active")
  //       })
  //   })
  return (
    <div className="container">
      {/* <!-- 地圖--> */}
      <div className="taiwan-map"></div>
      <div id="map">
        {/* <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"></svg> */}
      </div>
      <div className="shop-list">{/* <h1>{{ h1 }}</h1>
        <h2>{{ h2 }}</h2> */}</div>
    </div>
  )
}

export default Taiwan
