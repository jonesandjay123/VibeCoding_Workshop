# 📋 Vibe Coding 速查表
### Session 3 — Data Flow & Version Control

> 列印這張帶走！以後開發照著走就好。

---

## 📦 JSON 速查

> **JSON = 電腦看的 Markdown**

```json
{
  "key": "value",
  "數字不用引號": 42,
  "文字要引號": "hello",
  "布林值": true,
  "清單": ["a", "b", "c"]
}
```

| 規則 | 說明 |
|------|------|
| `{ }` 包住 | 整份資料的範圍 |
| `"key": value` | 名稱 : 值 |
| 文字 → `"雙引號"` | 字串一定要引號 |
| 數字 → 直接寫 | `10`、`3.5` |
| 逗號分隔 | 最後一項不加逗號 |

---

## 🗄️ localStorage 速查

> **localStorage = 瀏覽器裡的小抽屜**

| 動作 | 指令 | 說明 |
|------|------|------|
| 放進去 | `localStorage.setItem("key", "value")` | 存東西 |
| 拿出來 | `localStorage.getItem("key")` | 取東西 |
| 刪一個 | `localStorage.removeItem("key")` | 刪掉指定的 |
| 全清空 | `localStorage.clear()` | 清空抽屜 |

### 📌 重點
```
存的時候：JSON.stringify(物件) → 變成文字 → 放進抽屜
拿的時候：JSON.parse(文字) → 變回物件 → 可以操作
```

### 🔍 怎麼看資料？
```
DevTools → Application → Local Storage → 點擊網址 → 看到所有資料！
快捷鍵：Cmd + Option + I（Mac）/ F12（Windows）
```

---

## 🌿 Git Branch 速查

> **Branch = 平行宇宙**

| 指令 | 🎮 比喻 | 說明 |
|------|---------|------|
| `git branch` | 我在哪個宇宙？ | 看所有 branch |
| `git checkout -b 名稱` | 開新宇宙 | 建立 + 切換 |
| `git checkout main` | 回正式版 | 切回 main |
| `git merge 名稱` | 搬回正式版 | 合併到目前 branch |
| `git log --oneline` | 看時間軸 | 所有 commit 紀錄 |

### 📝 完整開發流程

```
1. git checkout -b feature-xxx   ← 開新 branch
2. 寫 code / 做改動
3. git add .
4. git commit -m "做了什麼"
5. git checkout main              ← 切回 main
6. git merge feature-xxx          ← 合併
7. git push                       ← 上傳
```

---

## 📞 API GET 速查

> **GET = 去拿資料（跟服務生說「給我菜單」）**

瀏覽器試試看：
- 🐶 `https://dog.ceo/api/breeds/image/random`
- 💬 `https://api.quotable.io/random`

---

## 🚀 下一步可以做什麼？

### 今天就能做 ✅
- [ ] 打開 demo-2，打卡幾次，用 DevTools 觀察 localStorage
- [ ] 用 Git 建一個 branch，做改動，merge 回 main

### 這週可以探索 🔍
- [ ] 想想打卡網站還能加什麼功能
- [ ] 用 [Learn Git Branching](https://learngitbranching.js.org/) 練習 branch
- [ ] 用 DevTools 觀察你常用網站的 localStorage

### 品牌進化路線
```
1. ✅ 漂亮的品牌頁面（HTML + CSS）
2. ✅ 專業版本管理（Git CLI）
3. ✅ 資料流動（JSON + localStorage + Branch）← 今天！
4. 🔜 完整打卡網站
5. 🔜 AI 加速開發（Vibe Coding 實戰）
6. 🔜 品牌官網 + 更多可能
```

---

> *你已經知道資料是怎麼活著的了。* 💪
