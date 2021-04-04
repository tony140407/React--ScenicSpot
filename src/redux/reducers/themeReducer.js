const initialState = {
  scenicSpots: [],
  skipNum: 0,
  preCity: "",
  city: "",
  url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON`,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_ADD_DATA":
      return {
        ...state,
        scenicSpots: state.scenicSpots.concat(action.newData),
      }
    case "INIT_SKIP_NUM":
      return {
        ...state,
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

    default:
      return state
  }
}

export default reducer
