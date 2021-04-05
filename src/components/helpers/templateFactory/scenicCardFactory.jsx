import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ScenicSpotCard from "../../ScenicSpotCard"
import apiDataProcess from "../js/apiDataProcess"
import {
  changeCity,
  changePreCity,
  initStateForNewCity,
  setUrl,
  apiAddData,
} from "../../../redux/actions/themeAction"
import axiosGetData from "../js/axiosGetData"
export const ScenicCardFactory = (props) => {
  const dispatch = useDispatch()
  let [scenicCards, setScenicCards] = useState([])
  let [isGone, setIsGone] = useState(false)
  const url = useSelector((state) => state.url)
  const preCity = useSelector((state) => state.preCity)
  const city = useSelector((state) => state.city)

  // router 改變 也改變city
  const { cityName } = props.match.params
  console.log(cityName)
  useEffect(() => {
    // if (city == "" && !cityName) {
    //   dispatch(setUrl())
    //   return
    // }
    if (cityName == city) return // 重複點選
    if (!cityName) {
      if (preCity == "" && city == "") {
        dispatch(setUrl()) // 第一次init
        return
      }
      dispatch(changeCity(""))
      dispatch(setUrl())
      return
    }
    // 新選擇一個城市
    dispatch(changeCity(cityName))
    dispatch(initStateForNewCity())
    dispatch(setUrl())
  }, [cityName])

  function templateToList(data) {
    let liList = []
    data.forEach((item, index) => {
      const { description, tags, town, img } = apiDataProcess(item)
      liList.push(
        <ScenicSpotCard
          key={item.ID}
          name={item.Name}
          description={description}
          alt={item.Picture.PictureDescription1}
          url={img}
          tag={tags}
          town={town}
          index={index}
        />
      ) //regionsData={item} 逞成各屬性 如 NAME ID...
    })
    return liList
  }

  useEffect(async () => {
    if (url == "") return
    let data = await axiosGetData(url)
    if (!data.length) {
      setIsGone(true)
      return
    }
    const elements = templateToList(data)
    if (preCity != city) {
      setScenicCards(elements)
      dispatch(apiAddData(data))
      dispatch(changePreCity())
    } else {
      setScenicCards(scenicCards.concat(elements))
      dispatch(apiAddData(data))
    }
  }, [url])

  return (
    <section>
      <ul className="ticketCard-area row g-0 list-unstyled">{scenicCards}</ul>
      {isGone && <p className="h1 text-center">Gone. It's all gone.</p>}
    </section>
  )
}
