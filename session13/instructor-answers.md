# 合成資料的教師參考答案

> 這是查答案用的素材，不是每個學生都要完成的考卷。先了解她現在的問題，再使用相關段落。真實作業的答案不能直接照搬本頁數字。

## 正確數字（均來自原樣本，金額：萬元人民幣）

| 檢查 | 答案 |
| :--- | :--- |
| 原表 | 20 行、5 欄；4 店×5 年；無缺值、無重複店年 |
| 選 `profit` | Series，shape `(20,)`；雙括號版本 DataFrame `(20, 1)` |
| `profit > 20` | 9 行：A 四行、C 五行 |
| `profit >= 20` | 仍 9 行，沒有恰好 20 的記錄 |
| `profit > 30` | 5 行：A 2025；C 2021、2023、2024、2025 |
| 五年店別合計 | A=130、B=71、C=193、D=62；合計 456 |
| 2025 利潤 | A=35、B=19、C=48、D=17；合計 119 |
| 2024 利潤 | A=30、B=15、C=42、D=14；合計 101 |
| B 店趨勢 | 12、14、11、15、19；2022→2023 下降 3，並非逐年增加 |

A 手算：18＋22＋25＋30＋35＝130；B：12＋14＋11＋15＋19＝71。問「平均與總和差在哪？」A 五年平均是 26 萬元／年，不能將它標成五年總和。

一店五年 `groupby('store')` 將 20 行變 4 組；`store＋year` 在此樣本已有唯一鍵，所以會是 20 個單行組，不能單靠這個例子展示多行加總。

## 2025 比較：參考解

需要這題時，先執行 workbook 模組 0、1、6A，再把參考解放到模組 7 的練習格。這些前置步驟會定義 df、output_dir 和圖表標籤；不必先教完其他模組。

下面的 assert 是教師用檢查：條件成立時不顯示內容，失敗時才報 AssertionError。它不是用來印出答案的。學生若只是想看數字，看 print(comparison) 就可以，不必先學 assert。

```python
only_2025 = df[df["year"] == 2025]
comparison = only_2025.set_index("store")["profit"].sort_index()
print(comparison)
assert len(comparison) == 4
assert comparison.to_dict() == {"門店A": 35, "門店B": 19, "門店C": 48, "門店D": 17}
plot_comparison = comparison if use_chinese else comparison.rename(index=store_labels)
ax = plot_comparison.plot(kind="bar", figsize=(7, 4), rot=0)
ax.set_title("2025 年各店利潤（合成資料）" if use_chinese else "Profit by store, 2025 (synthetic)")
ax.set_xlabel(x_label)
ax.set_ylabel(y_label)
fig = ax.get_figure()
fig.tight_layout()
path_2025 = output_dir / "profit-2025.png"
fig.savefig(path_2025, dpi=150, bbox_inches="tight")
print("Saved:", path_2025.resolve())
plt.show()
plt.close(fig)
```

若改做 2024 年，除了篩選條件，也要同步改驗證預期值（A=30、B=15、C=42、D=14）、圖標題及檔名（如 `profit-2024.png`），避免沿用 2025 的斷言或誤標。

可接受的解讀：「在合成資料中，2025 年門店 C 利潤最高，為 48 萬元，比門店 A 高 13 萬元。」不可自行補「因為管理最好／行銷成功」。

## 趨勢：參考解

需要時間趨勢時，先執行模組 0、1、6A，再把參考解放到模組 8。

`pivot` 把同一份數字換個位置，排成年份在行、門店在欄的表格，不是在加總。本資料每個店年只有一行，所以可以直接這樣排列。真實資料若有同店同年多行，先查清一行代表什麼，再決定是否應加總，不用平均掩蓋問題。

```python
trend = df.pivot(index="year", columns="store", values="profit").sort_index()
print(trend)
assert trend.shape == (5, 4)
assert trend.index.tolist() == [2021, 2022, 2023, 2024, 2025]
assert trend.loc[2025, "門店C"] == 48
plot_trend = trend if use_chinese else trend.rename(columns=store_labels)
ax = plot_trend.plot(marker="o", figsize=(7, 4))
ax.set_title("各店 2021–2025 利潤趨勢（合成資料）" if use_chinese else "Profit trends, 2021–2025 (synthetic)")
ax.set_xlabel("年份" if use_chinese else "Year")
ax.set_ylabel(y_label)
ax.set_xticks(trend.index)
ax.legend(title=x_label, loc="upper left", bbox_to_anchor=(1.02, 1))
fig = ax.get_figure()
fig.tight_layout()
trend_path = output_dir / "profit-trend.png"
fig.savefig(trend_path, dpi=150, bbox_inches="tight")
print("Saved:", trend_path.resolve())
plt.show()
plt.close(fig)
```

## 根據今天的目標收尾

只選與本次問題相關的一兩項，不逐項考完：

- 如果在處理執行順序，她是否能指出需要先執行哪一格，以及舊輸出為什麼需要重算？
- 如果在處理篩選或加總，她是否能指出哪些原始行被留下或合併，以及答案的單位？
- 如果在檢查 AI 的圖，她是否找到一個可以從原資料核對的數字，並確認年份與題目一致？
- 如果有修改分析，她是否能保存後重跑必要步驟，得到相同結果？

記錄「自己完成」「提示後完成」或「仍待處理」即可。若學生端環境未成功，只能記錄口述或概念理解的進展，不宣稱已獨立重現。沒有畫圖需求就不要求 PNG；沒有趨勢需求就不加做進階題。

## 維護者重跑檢查

在已安裝 pandas、matplotlib 的 Python 中，可用 `nbformat`、`nbclient`、`ipykernel` 做額外 notebook 執行檢查（學生不需另外學這些工具）。

1. 檢查 notebook 格式，從新 kernel 全跑引導版。
2. 另存臨時副本，將本頁兩段 Python 分別填入挑戰空格，再從新 kernel 全跑。另確認只執行各模組列明的前置步驟也可正常運作。
3. 分別從倉庫根目錄及 `session13/` 路徑測試；確認三個 PNG 非空，查看標籤和趨勢點。
4. 刻意操作的 scratch 實驗獨立測試；正式 workbook 不應故意留下錯誤。

執行生成的圖放在被忽略的 `outputs/`，原版 notebook 保持空輸出。這避免舊輸出誤導，也避免把學生日後的私有資料帶進提交。

若驗證環境不能啟動 Jupyter kernel，可用全新 Python 程序依順序執行 code cells，檢查代碼及變數依賴；要明確標示這不等於已測試實際 Jupyter 介面或學生端 kernel。
