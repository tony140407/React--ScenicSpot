import React from "react"
import ScenicSpotCard from "../ScenicSpotCard"
import apiDataProcess from "./apiDataProcess"

export const scenicCardFactory = (list) => {
  let liList = []
  list.forEach((item) => {
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
      />
    ) //regionsData={item} 逞成各屬性 如 NAME ID...
  })
  return liList
}
