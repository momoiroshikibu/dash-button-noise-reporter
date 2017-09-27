# dash-button-noise-reporter

## Qiita

上の階の人の騒音をAmazon Dash ButtonとGoogle Sheetsで記録する
https://qiita.com/momoiroshikibu@github/items/d6b30959725eea8c2038

## System Diagram

```
Dash Button     dash-button-noise-reporter     Google Sheets
 (Amazon)               (Node.js)                 (Google)

   press     ->        receive event

                      call Sheets API      ->  update cell value
```
