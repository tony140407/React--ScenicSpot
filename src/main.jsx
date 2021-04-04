import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import configureStore from "./redux/store/configureStore"
import { Provider } from "react-redux"
// import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// window.bootstrap = bootstrap
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
