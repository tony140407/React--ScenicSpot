import replaceImg from "../../../public/img/replaceImg.jpg"
export default function apiDataProcess(item) {
  const descriptionSlice = () => {
    if (item.Description) {
      let approximateDescription = `${item.Description.slice(0, 70)}...`
      return approximateDescription
    }
    if (item.DescriptionDetail) {
      let approximateDescription = `${item.DescriptionDetail.slice(0, 70)}...`
      return approximateDescription
    }
    return "尚未有更多描述"
  }

  const tagList = () => {
    // 判別是否存在Class們並回傳array, false顯示 ["尚未分類"]
    // array 依字數排列且不重複
    if (item.Class1) {
      let list = []
      list.push(item.Class1)
      if (item.Class2) {
        list.push(item.Class2)
      }
      if (item.Class3) {
        list.push(item.Class3)
      }
      const itemSort = Array.from(new Set(list)).sort(function (a, b) {
        return b.length - a.length
      })
      return itemSort
    }
    return ["尚未分類"]
  }
  const town = () => {
    if (item.City) {
      return item.City
    }
    return item.Address.slice(0, 3)
  }
  const imgNotDefine = () => {
    return !item.Picture.PictureUrl1 ? replaceImg : item.Picture.PictureUrl1
  }

  return {
    description: descriptionSlice(),
    tags: tagList(),
    town: town(),
    img: imgNotDefine(),
  }
}
