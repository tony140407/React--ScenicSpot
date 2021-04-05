# React--ScenicSpot

## 簡介
![](https://i.imgur.com/adt4tKL.png)

此為串接交通部觀光景點 API ([MOTC Transport API V2](https://ptx.transportdata.tw/MOTC?t=Tourism&v=2)),並使用 React 實作一個瀏覽景
點的網站

## 如何開啟

下載後，再命令提示字元中輸入:
`npm run install`
安裝必要 node_modules後，輸入:
`npm run dev`
即可開啟頁面。

## 架構及功能實現
![](https://i.imgur.com/8XGAcz5.png)

### App.jsx
![](https://i.imgur.com/XTv3FMd.png)

由 App.jsx 可大致看出網頁整體組成大概分成

* 導覽用的 < Navbar / >
* 擺放logo讓畫面稍稍美觀的 < Header />
* < main >中放著最主要呈現區 < RegionList />

### Navbar.jsx
![](https://i.imgur.com/hczlNDJ.jpg)
提供切換router的功能
### RegionList.jsx
靠著 router 及 監聽網頁滾動來改變 redux 內的 state
判斷更新/載入景點，在檔案中渲染出一個個卡片元件

### CardModal.jsx
![](https://i.imgur.com/5OFBSvA.jpg)
引入 bootstrap 的 modal 配合串接的資料提供使用者更詳盡的旅遊資訊


