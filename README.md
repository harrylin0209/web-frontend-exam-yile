# Tech Stack

- React
- JavaScript
- TailwindCSS
- Framer Motion
- MirageJS
- Yarn

---

# Features

- Job keyword search
- Education level filter
- Salary level filter
- Dynamic job listing
- Mock API integration
- Loading state handling
- Empty state UI
- Hero animation
- Eye tracking effect
- Responsive design (RWD)

---

# 1. 如何執行此專案

## Install dependencies

使用 yarn 安裝依賴：

```bash
yarn install
```

---

## Start development server

啟動 React 開發環境：

```bash
yarn start
```

預設執行：

```bash
http://localhost:3000
```

---

## Install Framer Motion

若尚未安裝動畫套件：

```bash
yarn add framer-motion
```

---

## Mock API (MirageJS)

此專案使用 MirageJS 模擬後端 API。

MirageJS 會在 React App 啟動時一併初始化，不需要另外啟動 mock server。

初始化位置：

```bash
src/index.js
```

---

# 2. 專案架構

```bash
src/
├── api/
│   ├── client.js
│   └── jobService.js
│
├── pages/
│   └── Homepage.jsx
│
├── components/
│   ├── HeroIllustration.jsx
│   ├── Eye.jsx
│   │
│   ├── JobBoard.jsx
│   ├── SearchToolbar.jsx
│   ├── JobList.jsx
│   ├── JobCard.jsx
│   ├── Pagination.jsx
│   │
│   ├── JobPanel.jsx
│   └── ImageCarousel.jsx
│
├── hooks/
│   └── useItemPerPage.js
│
├── App.jsx
└── index.js
```

---

# 3. 系統架構與邏輯說明

## Data Flow（State Lifting）

此專案未使用 Redux / Zustand 等全域狀態管理工具。

主要採用：

**State Lifting（狀態提升）**

由 `Homepage` 管理 JobPanel 開關、API Loading/Error 狀態；
並由 `JobBoard` 管理 Job 篩選/搜尋/動態列表 狀態。

```text
Homepage
├── HeroIllustration
├── JobBoard
│   └── SearchToolbar / JobList / JobCard
└── JobPanel
```

Homepage 中集中管理：

- selectedJobId
- jobDetail
- isLoading
- error

JobBoard 中集中管理：

- keyword
- educationLevel
- salaryLevel
- jobs
- filteredJobs

再透過 props 傳遞給子元件。

此方式適合中小型專案，可避免過度設計。

---

## Search Flow

使用者操作流程：

1. 輸入 keyword
2. 選擇 education level
3. 選擇 salary level
4. 點擊 Search button
5. 觸發 `handleSearch()`
6. 取得 jobs 資料
7. 執行篩選邏輯
8. 更新 JobList UI

---

## Filtering Logic

主要篩選條件：

- Keyword
- Education Level
- Salary Level

篩選責任拆分：

- `SearchToolbar` → 接收輸入與觸發搜尋
- `JobBoard` → 處理搜尋邏輯、實作條件過濾
- `JobList` → 顯示結果

---

## Mock API Architecture

使用 MirageJS 模擬 API：

```bash
/api/v1/jobs
/api/v1/educationLevelList
/api/v1/salaryLevelList
/api/v1/jobDetail/:id
```

用途：

- 前後端尚未串接時先完成 UI
- 模擬 API latency
- 驗證 loading / error handling
- 降低前後端開發耦合

---

## Component Design Strategy

### Homepage

負責：

- Global page layout
- Main state management
- Data flow control

---

### SearchToolbar

負責：

- Keyword input
- Filter select
- Search action

不負責資料處理。

---

### JobBoard

負責：

- Job list rendering
- Empty state
- Result display

---

### Hero

負責：

Landing section UI：

- Illustration layers
- Logo breathing animation
- Eye following mouse position effect

---

# 4. UI / Animation 設計

## Logo Breathing Animation

使用：Framer Motion

效果：

- Scale up
- Scale down
- Infinite loop
- 每 cycle 約 1.5 秒

---

## Eye Following Mouse Position Effect

根據滑鼠座標：

```js
mousemove
```

計算：

- translateX
- translateY

控制眼珠微幅位移；並且設有限制最大偏移範圍，避免眼球超出視覺範圍。

---

## Responsive Design (RWD)

使用 TailwindCSS，採取 Mobile-first 策略處理內容：

- Hero layout scaling
- Image proportional resize
- Dynamic spacing
- Breakpoint layout adjustment

---

# 5. 專案遇到的困難、問題與解決方式

## 問題 1：RWD 圖片比例與距離失真

### 問題

Hero illustration 在小尺寸裝置容易變形或錯位。

### 解法

使用：

- Relative container
- Percentage-based sizing and positioning
- Preserve aspect ratio

確保圖片與 spacing 同步縮放。

---


## 問題 2：不使用 Zustand / Redux，資料怎麼共享？

### 問題

組件分割後，搜尋條件與搜尋結果需要跨 component 傳遞。

### 解法

使用：

**State Lifting**

由 `Homepage.jsx` 和 `JobBoard.jsx` 集中管理 State 和 Set Function，
再透過 props 傳遞給子元件：

1. 子元件只負責 UI 呈現，不直接處理資料邏輯。
2. 當子元件需要更新資料時，呼叫父元件提供的 set function。

---

## 問題 3：HTML String Parsing 問題

### 問題

直接 render HTML string 時：

- `<br />`
- `<ul>`
- `<li>`

無法正常解析。

### 解法

改用 HTML parser 將字串轉 React element。

避免被當成純文字輸出。

---

# 6. 後續可優化方向

- React Query（API cache / request handling / loading & error handling）
- Zustand（跨頁狀態管理）
- Debounce Search（避免頻繁請求）
- Skeleton Loading（API 載入時預顯示 UI 骨架，用以提升使用者體驗）
- Error Boundary
- Unit Testing（Jest / React Testing Library）
- E2E Testing（Cypress）
- Lazy loading / performance optimization