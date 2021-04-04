function Taiwan() {
  var jsonCircles = [
    {
      x_axis: 30,
      y_axis: 30,
      radius: 20,
      color: "green",
    },
    {
      x_axis: 70,
      y_axis: 70,
      radius: 20,
      color: "purple",
    },
    {
      x_axis: 110,
      y_axis: 100,
      radius: 20,
      color: "red",
    },
  ]
  var svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200)

  var circles = svgContainer.selectAll("circle").data(spaceCircles).enter().append("circle")

  var circleAttributes = circles
    .attr("cx", function (d) {
      return d
    })
    .attr("cy", function (d) {
      return d
    })
    .attr("r", 20)
    .style("fill", function (d) {
      var returnColor

      if (d === 30) {
        returnColor = "green"
      } else if (d === 70) {
        returnColor = "purple"
      } else if (d === 110) {
        returnColor = "red"
      }

      return returnColor
    })
}

export default Taiwan
