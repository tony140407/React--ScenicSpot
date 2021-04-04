import React from "react"

function ScenicSpotCard(props) {
  // console.log(props.picture["PictureDescription1"])
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
  return (
    <li className="ticketCard col-4">
      <div className="ticketCard-img">
        <a href="#">
          <img className="img-fluid" src={props.url} alt={props.alt} />
        </a>
        {/* <div className="ticketCard-region">{props.type}</div> */}
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
        <div className="ticketCard-info">
          <p className="ticketCard-num">
            <span>
              <i className="fas fa-exclamation-circle"></i>
            </span>
            剩下最後{" "}
            <span id="ticketCard-num" className="text-info">
              {" "}
              87{" "}
            </span>{" "}
            組
          </p>
          <p className="ticketCard-price">
            {props.town}
            {/* TWD <span id="ticketCard-price">$1400</span> */}
          </p>
        </div>
      </div>
    </li>
  )
}

export default ScenicSpotCard
