const initialState = {
  scenicSpots: [],
  skipNum: 0,
  preCity: "",
  city: "",
  url: ``,
  modalDataIndex: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_ADD_DATA":
      let data
      // 城市一樣,資料累加; 城市不同,array放新資料
      if (state.city != state.preCity) {
        data = action.newData
      } else {
        data = state.scenicSpots.concat(action.newData)
      }
      return {
        ...state,
        scenicSpots: data,
      }
    case "INIT_STATE_FOR_NEW_CITY":
      return {
        ...state,
        scenicSpots: [],
        skipNum: 0,
      }
    case "ADD_SKIP_NUM":
      console.log(`skip改變~~ ${state.skipNum + 30}`)
      return {
        ...state,
        skipNum: state.skipNum + 30,
      }
    case "CHANGE_PRE_CITY":
      return {
        ...state,
        preCity: state.city,
      }
    case "CHANGE_CITY":
      console.log(`city改變~~ ${action.payload}`)
      return {
        ...state,
        city: action.payload,
      }
    case "SET_URL":
      if (state.city) {
        return {
          ...state,
          url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${state.city}?$top=30&$skip=${state.skipNum}&$format=JSON`,
        }
      }
      return {
        ...state,
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${state.skipNum}&$format=JSON`,
      }
    case "CALL_MODAL_DATA":
      return {
        ...state,
        modalDataIndex: action.dataIndex,
      }

    default:
      return state
  }
}

export default reducer
