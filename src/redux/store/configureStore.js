import { createStore } from "redux"
import themeReducer from "../reducers/themeReducer"

export default () => {
  // const store = createStore(themeReducer)
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    themeReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  /* eslint-enable */
  return store
}
