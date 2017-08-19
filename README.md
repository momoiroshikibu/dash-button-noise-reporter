# dash-button-noise-reporter

## System Diagram

```
Dash Button     dash-button-noise-reporter     Google Sheets
 (Amazon)               (Node.js)                 (Google)

   press     ->        receive event

                      call Sheets API      ->  update cell value
```
