# 合成数据的教师参考答案

> 这是查答案用的素材，不是每个学生都要完成的考卷。先了解她现在的问题，再使用相关段落。真实作业的答案不能直接照搬本页数字。

## 正确数字（均来自原样本，金额：万元人民币）

| 检查 | 答案 |
| :--- | :--- |
| 原表 | 20 行、5 栏；4 店×5 年；无缺值、无重复店年 |
| 选 `profit` | Series，shape `(20,)`；双括号版本 DataFrame `(20, 1)` |
| `profit > 20` | 9 行：A 四行、C 五行 |
| `profit >= 20` | 仍 9 行，没有恰好 20 的记录 |
| `profit > 30` | 5 行：A 2025；C 2021、2023、2024、2025 |
| 五年店别合计 | A=130、B=71、C=193、D=62；合计 456 |
| 2025 利润 | A=35、B=19、C=48、D=17；合计 119 |
| 2024 利润 | A=30、B=15、C=42、D=14；合计 101 |
| B 店趋势 | 12、14、11、15、19；2022→2023 下降 3，并非逐年增加 |

A 手算：18＋22＋25＋30＋35＝130；B：12＋14＋11＋15＋19＝71。问「平均与总和差在哪？」A 五年平均是 26 万元／年，不能将它标成五年总和。

一店五年 `groupby('store')` 将 20 行变 4 组；`store＋year` 在此样本已有唯一键，所以会是 20 个单行组，不能单靠这个例子展示多行加总。

## 2025 比较：参考解

需要这题时，先执行 workbook 模块 0、1、6A，再把参考解放到模块 7 的练习格。这些前置步骤会定义 df、output_dir 和图表标签；不必先教完其他模块。

下面的 assert 是教师用检查：条件成立时不显示内容，失败时才报 AssertionError。它不是用来印出答案的。学生若只是想看数字，看 print(comparison) 就可以，不必先学 assert。

```python
only_2025 = df[df["year"] == 2025]
comparison = only_2025.set_index("store")["profit"].sort_index()
print(comparison)
assert len(comparison) == 4
assert comparison.to_dict() == {"门店A": 35, "门店B": 19, "门店C": 48, "门店D": 17}
plot_comparison = comparison if use_chinese else comparison.rename(index=store_labels)
ax = plot_comparison.plot(kind="bar", figsize=(7, 4), rot=0)
ax.set_title("2025 年各店利润（合成数据）" if use_chinese else "Profit by store, 2025 (synthetic)")
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

若改做 2024 年，除了筛选条件，也要同步改验证预期值（A=30、B=15、C=42、D=14）、图标题及档名（如 `profit-2024.png`），避免沿用 2025 的断言或误标。

可接受的解读：「在合成数据中，2025 年门店 C 利润最高，为 48 万元，比门店 A 高 13 万元。」不可自行补「因为管理最好／行销成功」。

## 趋势：参考解

需要时间趋势时，先执行模块 0、1、6A，再把参考解放到模块 8。

`pivot` 把同一份数字换个位置，排成年份在行、门店在栏的表格，不是在加总。本数据每个店年只有一行，所以可以直接这样排列。真实数据若有同店同年多行，先查清一行代表什么，再决定是否应加总，不用平均掩盖问题。

```python
trend = df.pivot(index="year", columns="store", values="profit").sort_index()
print(trend)
assert trend.shape == (5, 4)
assert trend.index.tolist() == [2021, 2022, 2023, 2024, 2025]
assert trend.loc[2025, "门店C"] == 48
plot_trend = trend if use_chinese else trend.rename(columns=store_labels)
ax = plot_trend.plot(marker="o", figsize=(7, 4))
ax.set_title("各店 2021–2025 利润趋势（合成数据）" if use_chinese else "Profit trends, 2021–2025 (synthetic)")
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

## 根据今天的目标收尾

只选与本次问题相关的一两项，不逐项考完：

- 如果在处理执行顺序，她是否能指出需要先执行哪一格，以及旧输出为什么需要重算？
- 如果在处理筛选或加总，她是否能指出哪些原始行被留下或合并，以及答案的单位？
- 如果在检查 AI 的图，她是否找到一个可以从原数据核对的数字，并确认年份与题目一致？
- 如果有修改分析，她是否能保存后重跑必要步骤，得到相同结果？

记录「自己完成」「提示后完成」或「仍待处理」即可。若学生端环境未成功，只能记录口述或概念理解的进展，不宣称已独立重现。没有画图需求就不要求 PNG；没有趋势需求就不加做进阶题。

## 维护者重跑检查

在已安装 pandas、matplotlib 的 Python 中，可用 `nbformat`、`nbclient`、`ipykernel` 做额外 notebook 执行检查（学生不需另外学这些工具）。

1. 检查 notebook 格式，从新 kernel 全跑引导版。
2. 另存临时副本，将本页两段 Python 分别填入挑战空格，再从新 kernel 全跑。另确认只执行各模块列明的前置步骤也可正常运作。
3. 分别从仓库根目录及 `session13/` 路径测试；确认三个 PNG 非空，查看标签和趋势点。
4. 刻意操作的 scratch 实验独立测试；正式 workbook 不应故意留下错误。

执行生成的图放在被忽略的 `outputs/`，原版 notebook 保持空输出。这避免旧输出误导，也避免把学生日后的私有数据带进提交。

若验证环境不能启动 Jupyter kernel，可用全新 Python 程序依顺序执行 code cells，检查代码及变量依赖；要明确标示这不等于已测试实际 Jupyter 介面或学生端 kernel。
