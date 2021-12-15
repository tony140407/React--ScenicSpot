import React, { useState, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import ScenicSpotCard from "../../ScenicSpotCard"
import apiDataProcess from "../js/apiDataProcess"
import {
  changeCityToInitAllState,
  changePreCity,
  apiAddData,
} from "../../../redux/actions/themeAction"
import axiosGetData from "../js/axiosGetData"

export const ScenicCardFactory = React.memo(() => {
  const dispatch = useDispatch()
  let [isGone, setIsGone] = useState(false)
  const { url, preCity, city, skipNum, scenicSpots } = useSelector((state) => state)
  // router 改變 也改變city
  const location = useLocation()
  const path = location.pathname // '/scenicSpot' or '/scenicSpot/:cityName'
  const pathArray = path.split("/") // ['', 'scenicSpot'] or ['', 'scenicSpot', cityName]
  const cityName = pathArray[pathArray.length - 1]

  useEffect(() => {
    if (!cityName) {
      if (preCity == "" && city == "") {
        return // 第一次init
      }
      dispatch(changeCityToInitAllState(""))
      return
    }
    // 新選擇一個城市
    dispatch(changeCityToInitAllState(cityName))
  }, [cityName])

  useEffect(async () => {
    if (url == "") return
    let data = await axiosGetData(url)
    if (!data.length) {
      setIsGone(true)
      return
    }

    if (preCity != city) {
      dispatch(apiAddData(data))
      dispatch(changePreCity())
    } else {
      dispatch(apiAddData(data))
    }
  }, [url])

  const TemplateToList = React.memo((props) => {
    const { data } = props
    let liList = []
    data.forEach((item, index) => {
      const { description, tags, town, img } = apiDataProcess(item, index)
      liList.push(
        <ScenicSpotCard
          key={item.ID}
          name={item.Name}
          description={description}
          alt={item.Picture.PictureDescription1}
          url={img}
          tag={tags}
          town={town}
          index={index + skipNum}
        />
      ) //regionsData={item} 逞成各屬性 如 NAME ID...
    })
    return liList
  })

  return (
    <section className="container">
      <ul className="ticketCard-area row g-0 list-unstyled">
        <TemplateToList data={scenicSpots} />
      </ul>
      {isGone && <p className="h1 text-center my-5 py-5">Gone. It's all gone.</p>}
    </section>
  )
})
