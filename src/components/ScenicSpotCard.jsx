import React from "react"
import { useDispatch } from "react-redux"
import { callModalData } from "../redux/actions/themeAction"
function ScenicSpotCard(props) {
  const dispatch = useDispatch()
  let tagElements = []
  props.tag.forEach((eachTag, index) => {
    let tagClass = tegClassProduce(eachTag)
    tagElements.push(
      <div className={`tag bg-tag-${tagClass}`} key={index}>
        <p>{eachTag}</p>
      </div>
    )
  })
  function tegClassProduce(tagName) {
    switch (true) {
      case tagName == "尚未分類":
        return "none"
      case tagName == "國家風景區類":
        return "1"
      case tagName == "自然風景類":
        return "2"
      default:
        return "3"
      // case tagName === "國家風景區類":
      //   return "1"
    }
  }
  function propsPassData() {
    dispatch(callModalData(props.index))
  }
  return (
    <li
      className="ticketCard col-4"
      onClick={propsPassData}
      data-bs-toggle="modal"
      data-bs-target="#cardModal"
    >
      <div className="ticketCard-img">
        <a href="#">
          <img
            // onError={(e) => console.log(e)}
            className="img-fluid"
            src={props.url}
            alt={props.alt}
          />
        </a>
        <div className="tagContainer">{tagElements}</div>
      </div>
      <div className="ticketCard-content">
        <div>
          <h3>
            <a href="#" className="ticketCard-name">
              {props.name}
            </a>
          </h3>
          <p className="ticketCard-description">{props.description}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-secondary">{props.town}</p>
          <p className="text-dark pointer">(點擊卡片以查看更多)</p>
        </div>
      </div>
    </li>
  )
}

export default ScenicSpotCard
