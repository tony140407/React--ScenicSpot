import axios from "axios"
export default function axiosGetData(url) {
  return new Promise((resolve, reject) => {
    axios(url)
      .then((res) => {
        // console.log(res.data)
        resolve(res.data)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
        reject()
      })
  })
}
