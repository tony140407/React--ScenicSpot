import React, { useState, useEffect } from "react"
import { scenicCardFactory } from "./helpers/scenicCardFactory"
import { useDispatch, useSelector } from "react-redux"
import { changePreCity, apiAddData } from "../redux/actions/themeAction"
import axiosGetData from "./helpers/axiosGetData"
// import { Modal } from "bootstrap"
import CardModal from "./CardModal"
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
      setScenicCards(elements)
      dispatch(changePreCity())
    } else {
      setScenicCards(scenicCards.concat(elements))
    }

    dispatch(apiAddData(data))
  }, [url])
  return (
    <div className="bg-light py-5">
      <CardModal />
      <section className="container">
        <ul className="ticketCard-area row g-0 list-unstyled">{scenicCards}</ul>
      </section>
      {isGone && <p className="h1 text-center">Gone. It's all gone.</p>}
    </div>
  )
}

export default RegionList
