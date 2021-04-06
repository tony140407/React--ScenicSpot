import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUrl, addSkipNum } from "../../../redux/actions/themeAction"

export const detectScroll = () => {
  const dispatch = useDispatch()
  const [isBottom, setIsBottom] = useState(false)
  // 偵測是否到頁面底部
  useEffect(() => {
    const onScroll = (e) => {
      setIsBottom(e.target.documentElement.getBoundingClientRect().bottom <= window.innerHeight)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  // 若到底部，則改變url
  useEffect(() => {
    if (isBottom === false) return // 避免首次執行
    dispatch(addSkipNum())
    dispatch(setUrl())
  }, [isBottom])
}
