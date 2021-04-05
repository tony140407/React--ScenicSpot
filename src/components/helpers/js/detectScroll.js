import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setUrl,
  initStateForNewCity,
  addSkipNum,
  changePreCity,
} from "../../../redux/actions/themeAction"
import axiosGetData from "./axiosGetData"

export const detectScroll = () => {
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
    dispatch(setUrl())
  }, [isBottom])
}
