const google = require('googleapis');
const sheets = google.sheets('v4');

const {spreadSheetId, spreadSheetName} = require('./Config');

/**
 * record to Spread Sheet.
 */
module.exports = function record(oauth2Client, date) {

    const body = {
        values: [
            [format(date)]
        ] // 1 row, 1 column, (N, A = A(n))
    };

    const appendOptions = {
        auth: oauth2Client,
        spreadsheetId: spreadSheetId,
        range: `${spreadSheetName}`,
        resource: body,
        valueInputOption: 'USER_ENTERED',
        includeValuesInResponse: true
    };

    // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
    sheets.spreadsheets.values.append(appendOptions, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log('%d cells appended -> %s',
                        result.updates.updatedCells,
                        result.updates.updatedData.values[0][0]);
        }
    });
}


/**
 * format date(instanceof Date) to cell value string.
 * 8/16/2017 17:23:32
 */
function format(date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
