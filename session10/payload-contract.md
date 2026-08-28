# Relationship Memory Payload Contract v1

> 用途：讓任何外部 LLM 將一段自然語言／語音紀錄整理成相同格式，再由 Web App 驗證、預覽與人工確認。LLM 不直接寫入 App，也不擁有最終事實決定權。

## 設計原則

1. **只整理，不補寫。** 沒說過的事情使用 `null` 或空陣列。
2. **事實與觀察分開。** 對方親口說的內容不能和記錄者的感受混在一起。
3. **建議不是事實。** 下次話題放在 `suggestedTopics`，不能放進人物背景。
4. **不確定性必須留下。** 不完整日期、暱稱、可能重複人物都放入 `requiresReview`。
5. **輸出只包含 JSON。** 不要 code fence、前言、結語或 Markdown。
6. **人確認後才建檔。** App 必須預覽、允許修正，再由使用者按下確認。

## Payload shape

```json
{
  "schemaVersion": "1.0",
  "person": {
    "displayName": "string",
    "relationshipType": "customer | classmate | teacher | business | friend | other",
    "organization": "string | null",
    "role": "string | null",
    "location": "string | null",
    "languages": ["string"],
    "tags": ["string"],
    "profileNotes": [
      {
        "text": "string",
        "source": "said_by_person | observed_by_me"
      }
    ]
  },
  "interaction": {
    "occurredOn": "YYYY-MM-DD | null",
    "channel": "in_person | line | wechat | phone | email | other",
    "place": "string | null",
    "summary": "string",
    "saidByPerson": ["string"],
    "observedByMe": ["string"],
    "commitments": [
      {
        "owner": "me | person",
        "action": "string",
        "dueOn": "YYYY-MM-DD | null"
      }
    ],
    "suggestedTopics": ["string"],
    "followUpOn": "YYYY-MM-DD | null"
  },
  "requiresReview": ["string"],
  "sensitiveDetailsOmitted": ["string"]
}
```

## App 驗證規則

- `schemaVersion` 必須等於 `1.0`。
- `person.displayName` 與 `interaction.summary` 不得為空。
- 所有日期只接受完整的 `YYYY-MM-DD`；不完整日期必須為 `null` 並進入 `requiresReview`。
- enum 欄位只能使用 contract 列出的值。
- 不接受額外的可執行程式碼、HTML 或指令。
- 解析成功不等於資料正確；存檔前仍要顯示完整預覽。
- 若可能和既有人物重複，必須讓使用者選擇「加入既有人物」或「建立新人」。

## 可直接交給外部 LLM 的 Prompt

```text
你是「人脈互動紀錄整理助手」。

你的任務是把我接下來提供的一段自然語言紀錄，整理成指定 JSON payload，讓我貼入自己的 Web App。

規則：
1. 只整理我明確說過的內容，不得推測、補寫或創造細節。
2. 未知資訊使用 null 或空陣列。
3. 不完整日期不得自行補成年月日；使用 null，並寫入 requiresReview。
4. 將對方親口說過的內容放在 saidByPerson。
5. 將我自己的觀察放在 observedByMe。
6. profileNotes 中每一項都必須標記來源；不得把對方說法改寫成已被第三方證實的事實。
7. 未明確說明關係分類時，relationshipType 使用 other，不得自行推測為客戶、朋友或商業關係。
8. 可能的下次聊天方向只能放在 suggestedTopics，不能當作已確認事實。
9. 若內容含有不適合保存的敏感細節，省略原文，並在 sensitiveDetailsOmitted 說明類型。
10. 只輸出合法 JSON。不要 Markdown code fence、標題、前言或說明。
11. 使用繁體中文整理文字欄位。

輸出格式：
{
  "schemaVersion": "1.0",
  "person": {
    "displayName": "string",
    "relationshipType": "customer | classmate | teacher | business | friend | other",
    "organization": "string | null",
    "role": "string | null",
    "location": "string | null",
    "languages": ["string"],
    "tags": ["string"],
    "profileNotes": [
      {
        "text": "string",
        "source": "said_by_person | observed_by_me"
      }
    ]
  },
  "interaction": {
    "occurredOn": "YYYY-MM-DD | null",
    "channel": "in_person | line | wechat | phone | email | other",
    "place": "string | null",
    "summary": "string",
    "saidByPerson": ["string"],
    "observedByMe": ["string"],
    "commitments": [
      {
        "owner": "me | person",
        "action": "string",
        "dueOn": "YYYY-MM-DD | null"
      }
    ],
    "suggestedTopics": ["string"],
    "followUpOn": "YYYY-MM-DD | null"
  },
  "requiresReview": ["string"],
  "sensitiveDetailsOmitted": ["string"]
}

以下是要整理的紀錄：
{{在這裡貼上或口述互動內容}}
```

## 虛構課堂範例

輸入：

```text
我今天在廈門一場市集認識一位大家叫冰淇淋大哥的人。
他經營一家冰淇淋店，也提到家裡有一名年幼的小孩。
我們聊了廈門的餐飲創業，還一起去了附近的展覽。
我答應下週把一篇日本甜點趨勢的文章傳給他。
我不確定他的本名和店名，也不記得孩子生日的完整日期。
```

合格輸出示例：

```json
{
  "schemaVersion": "1.0",
  "person": {
    "displayName": "冰淇淋大哥",
    "relationshipType": "other",
    "organization": null,
    "role": "冰淇淋店經營者",
    "location": "廈門",
    "languages": [],
    "tags": ["冰淇淋", "餐飲創業"],
    "profileNotes": [
      {
        "text": "經營一家冰淇淋店",
        "source": "said_by_person"
      }
    ]
  },
  "interaction": {
    "occurredOn": null,
    "channel": "in_person",
    "place": "廈門市集及附近展覽",
    "summary": "在市集初次認識，討論廈門餐飲創業，之後一起參觀附近展覽。",
    "saidByPerson": [
      "經營一家冰淇淋店",
      "家裡有一名年幼的小孩"
    ],
    "observedByMe": [],
    "commitments": [
      {
        "owner": "me",
        "action": "傳送一篇日本甜點趨勢文章",
        "dueOn": null
      }
    ],
    "suggestedTopics": ["冰淇淋店近況", "日本甜點趨勢", "廈門餐飲創業"],
    "followUpOn": null
  },
  "requiresReview": [
    "確認對方本名",
    "確認冰淇淋店名稱",
    "確認互動日期",
    "將『下週』轉換成完整追蹤日期"
  ],
  "sensitiveDetailsOmitted": ["未保存兒童姓名與不完整生日"]
}
```

## 課堂討論題

1. `suggestedTopics` 是資料、推測，還是建議？
2. 如果兩個人都被叫作「冰淇淋大哥」，App 應該怎麼處理？
3. LLM 回傳合法 JSON，但把一個推測寫成事實時，誰負責發現？
4. 換成另一個 LLM，什麼應該保持不變？
5. 哪些資料即使有助於維繫關係，也不值得保存？
