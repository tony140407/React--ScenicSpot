# React--ScenicSpot

## Demo

https://tony140407.github.io/React--ScenicSpot/scenicSpot/

## 簡介

![](https://i.imgur.com/adt4tKL.png)

此為串接交通部觀光景點 API ([MOTC Transport API V2](https://ptx.transportdata.tw/MOTC?t=Tourism&v=2)),並使用 React 實作一個瀏覽景
點的網站

## 如何開啟

下載後，再命令提示字元中輸入:
`npm run install`
安裝必要 node_modules 後，輸入:
`npm run dev`
即可開啟頁面。

## 使用技術

- React
- Vite
- React Hooks
- React Redux
- React Router
- Axios
- Bootstrap 5

## 架構

![](https://i.imgur.com/8XGAcz5.png)

### App.jsx

![](https://i.imgur.com/XTv3FMd.png)

由 App.jsx 可大致看出網頁整體組成大概分成

- 導覽用的 < Navbar / >
- 擺放 logo 讓畫面稍稍美觀的 < Header />
- < main >中放著最主要呈現區 < RegionList />

### Navbar.jsx

![](https://i.imgur.com/hczlNDJ.jpg)
提供切換 router 的功能

### RegionList.jsx

靠著 router 及 監聽網頁滾動來改變 redux 內的 state
判斷更新/載入景點，在檔案中渲染出一個個卡片元件

### CardModal.jsx

![](https://i.imgur.com/5OFBSvA.jpg)
引入 bootstrap 的 modal 配合串接的資料提供使用者更詳盡的旅遊資訊

## 功能

### 初次進入及變化網址時的 Url 刷新

src > components > helpers > templateFactory > scenicCardFactory.jsx
![](https://i.imgur.com/tJrE6sx.png)

初次載入 及 網址列的 cityName 改變時執行

- 改變 redux 內的 city、url
- 初始化 redux 內的 skipNum 和 scenicCardList

### 偵測 Url 更新

![](https://i.imgur.com/k2TXyFG.png)

利用 axios 取得遠端資料
apiAddData() 存入 data 到 redux 內( 若與前次城市相同，則累加併入 array 內 )
以利 Modal 再被點擊時能找尋到更詳盡資料

若 axios 取回的資料為空陣列，則 isGone 設為 true
RegionList.jsx 的下方將會出現提醒使用者資料已全部加載完畢

### 滾動到底部刷新

src > components > helpers > js > detectScroll.js
![](https://i.imgur.com/eeNrG5e.png)

在 window 上掛載 addEventListener 監聽滾動，並在達到頁面底部時改變 redux 內的 url

更多細節請至 [Demo 網站](https://tony140407.github.io/React--ScenicSpot/scenicSpot/) 觀看!
