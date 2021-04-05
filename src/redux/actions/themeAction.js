export const apiAddData = (newData) => {
  return {
    type: "API_ADD_DATA",
    newData,
  }
}
export const initStateForNewCity = () => {
  return {
    type: "INIT_STATE_FOR_NEW_CITY",
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
export const changeCity = (payload) => {
  return {
    type: "CHANGE_CITY",
    payload,
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
