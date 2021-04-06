export const apiAddData = (newData) => {
  return {
    type: "API_ADD_DATA",
    newData,
  }
}
export const addSkipNum = () => {
  return {
    type: "ADD_SKIP_NUM",
  }
}
export const changePreCity = () => {
  return {
    type: "CHANGE_PRE_CITY",
  }
}
export const changeCityToInitAllState = (city) => {
  return {
    type: "CHANGE_CITY_TO_INIT_ALL_STATE",
    city,
  }
}
export const setUrl = () => {
  return {
    type: "SET_URL",
  }
}
export const callModalData = (dataIndex) => {
  return {
    type: "CALL_MODAL_DATA",
    dataIndex,
  }
}
