import React, { useState, useEffect } from "react"
import { Modal } from "bootstrap"
import { useDispatch, useSelector } from "react-redux"
import replaceImg from "../assets/img/replaceImg.jpg"

const cardModal = React.memo(() => {
  const scenicSpots = useSelector((state) => state.scenicSpots)
  const modalDataIndex = useSelector((state) => state.modalDataIndex)
  let [scenicCardData, setScenicCardData] = useState({ Name: "" })
  useEffect(() => {
    if (modalDataIndex === undefined) return
    setScenicCardData(scenicSpots[modalDataIndex])
  }, [modalDataIndex])
  return (
    <div>
      <div
        className="modal fade"
        id="cardModal"
        tabIndex="-1"
        aria-labelledby="cardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-2 fw-bold" id="cardModalLabel">
                {scenicCardData.Name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-dark">
              <img
                src={
                  !("Picture" in scenicCardData) || !("PictureUrl1" in scenicCardData.Picture)
                    ? replaceImg
                    : scenicCardData.Picture.PictureUrl1
                }
                alt=""
                className="figure-img img-fluid rounded d-block mx-auto pb-2"
              />
              <p>
                <span className="fw-bolder fs-4">詳細介紹:</span> <br />
                {scenicCardData.DescriptionDetail}
              </p>
              <p>
                <span className="fw-bolder fs-4">地址:</span> {scenicCardData.Address}
              </p>
              <p>
                <span className="fw-bolder fs-4">費用:</span> {scenicCardData.TicketInfo}
              </p>
              <p>
                <span className="fw-bolder fs-4">開放時間:</span> {scenicCardData.OpenTime}
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn " data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default cardModal
