import React, { useState, useEffect } from "react"
import { scenicCardFactory } from "./helpers/scenicCardFactory"
import { useDispatch, useSelector } from "react-redux"
import { changePreCity, apiAddData } from "../redux/actions/themeAction"
import axiosGetData from "./helpers/axiosGetData"
function RegionList() {
  const dispatch = useDispatch()
  let [scenicCards, setScenicCards] = useState([])
  let [isGone, setIsGone] = useState(false)
  const url = useSelector((state) => state.url)
  const preCity = useSelector((state) => state.preCity)
  const city = useSelector((state) => state.city)

  useEffect(async () => {
    let data = await axiosGetData(url)
    if (!data.length) {
      setIsGone(true)
      return
    }
    const elements = scenicCardFactory(data)
    if (preCity != city) {
      console.log("不一樣")
      setScenicCards(elements)
      dispatch(changePreCity())
    } else {
      setScenicCards(scenicCards.concat(elements))
    }

    dispatch(apiAddData(data))
  }, [url])
  return (
    <div className="bg-light py-5">
      <section className="container px-5">
        <ul className="ticketCard-area row g-0 list-unstyled">{scenicCards}</ul>
      </section>
      {isGone && <p className="h1 text-center">Gone. It's all gone.</p>}
    </div>
  )
}

export default RegionList
