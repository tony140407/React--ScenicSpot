import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ScenicSpotCard from "../ScenicSpotCard"
import apiDataProcess from "./js/apiDataProcess"

export const scenicCardFactory = (list) => {
  const dispatch = useDispatch()
  let [scenicCards, setScenicCards] = useState([])
  let liList = []
  list.forEach((item, index) => {
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
