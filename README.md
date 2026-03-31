# Memory Match 🧠✨

一個使用 **React (Vite)** 打造的高質感霓虹玻璃風格「卡片翻牌記憶對對碰」遊戲。

## 🌟 遊戲特色 (Features)
- 💎 **Premium UI/UX**: 全新設計的 Glassmorphism 毛玻璃立體視窗以及絢爛的動態環境背光。
- 🪄 **流暢特效**: 從 Hover 懸停仰角、3D 翻牌、到配對成功的霓虹彈跳特效，細節全滿。
- 📱 **RWD 響應式佈局**: 完美支援電腦、平板及手機等各種解析度，螢幕切換無死角。
- 🚀 **自動部署整合**: 本專案已配置好 GitHub Actions，只需 Commit 代碼，皆能自動化打包上架至 GitHub Pages！

## 🛠️ 開發與設定 (Getting Started)

### 啟動本地開發環境
首先請確保你已安裝好 Node.js，然後執行以下指令裝載環境並啟動伺服器：

```bash
# 1. 安裝套件
npm install

# 2. 啟動本機開發伺服器
npm run dev
```
啟動後只要打開瀏覽器輸入 `http://localhost:5173` 就能遊玩喔！

### 自訂你的卡片圖案
目前的版面預設會讀取 `public/` 資料夾中名為 `pic1.jpg` 到 `pic14.jpg` 的 14 張圖片，一共產生 28 張牌。
*如果要換成自己的圖片：*
1. 把你準備的 14 張照片全部改名為 `pic1.jpg` ~ `pic14.jpg`
2. 將它們蓋掉原本 `public/` 資料夾裡面的圖片。
3. 如果你想更改圖片副檔名或數量，只需要去 `App.jsx` 針對 `cardImages` 常數與數量做相對應微調即可。

## 🌐 部署方式 (Deployment)
專案已經包含一份自動化 `.github/workflows/deploy.yml` 的腳本：
1. 將代碼提交上 GitHub： `git add . && git commit -m "Deploy to Pages" && git push`
2. 請確保在 GitHub 首頁 的 **Settings** -> **Pages** -> **Source** 選擇了 `GitHub Actions`。 
3. *如果有權限，上傳時腳本會嘗試自動幫你開啟這個設定。*
4. 耐心等待 1~2 分鐘，你的完美專屬記憶遊戲就會自動誕生啦！
