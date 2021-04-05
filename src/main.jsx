import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import configureStore from "./redux/store/configureStore"
import { Provider } from "react-redux"
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
