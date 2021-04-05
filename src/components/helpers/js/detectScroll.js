import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUrl, initSkipNum, addSkipNum, changePreCity } from "../../../redux/actions/themeAction"
import axiosGetData from "./axiosGetData"

export const detectScrollAndGetNewData = () => {
  const dispatch = useDispatch()
  const [scrollTop, setScrollTop] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const url = useSelector((state) => state.url)
  // 偵測是否到頁面底部
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
      setIsBottom(e.target.documentElement.getBoundingClientRect().bottom <= window.innerHeight)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])
  // 若到底部，則改變url
  useEffect(() => {
    if (isBottom === false) return // 避免首次執行
    console.log("到底了!!")
    dispatch(addSkipNum())
    // dispatch(changeCity("Taoyuan"))
    dispatch(setUrl())
  }, [isBottom])
}
export const conditionForUrlChange = () => {
  const dispatch = useDispatch()
  const preCity = useSelector((state) => state.preCity)
  const city = useSelector((state) => state.city)
  // 若city，則改變url
  useEffect(() => {
    if (city == false) return // 避免首次執行
    dispatch(initSkipNum())
    dispatch(setUrl())
  }, [city])
  // useEffect(() => {
  //   dispatch(initSkipNum())
  //   dispatch(setUrl())
  // }, [preCity == city])
}
