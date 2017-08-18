// most of these codes are from Google's sample.
// https://developers.google.com/sheets/api/quickstart/nodejs

const fs = require('fs');
const readline = require('readline');
const googleAuth = require('google-auth-library');

class GoogleAuthenticator {

    constructor({tokenDirectoryPath, credentialFilePath, accessTokenFilePath, scopes}) {
        // for generating
        this.scopes = scopes;
        this.tokenDirectoryPath = tokenDirectoryPath;

        // for authenticating
        this.credentialFilePath = credentialFilePath;
        this.accessTokenFilePath = accessTokenFilePath;

        this.authClient = null;
    }

    generateNewToken() {
        this.authClient = this.getAuthClient();
        const authUrl = this.authClient.generateAuthUrl({
            access_type: 'offline',
            scope: this.scopes
        });
        console.log('Authorize this app by visiting this url:\n', authUrl);
        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question('Enter the code from that page here: ', (code) => {
            readLine.close();
            this.authClient.getToken(code, (err, token) => {
                if (err) {
                    console.log('Error while trying to retrieve access token', err);
                    return;
                }
                storeToken(token);
            });
        });

        /**
         * Store token to disk be used in later program executions.
         *
         * @param {Object} token The token to store to disk.
         */
        const storeToken = (token) => {
            try {
                fs.mkdirSync(this.tokenDirectoryPath);
            } catch (err) {
                if (err.code != 'EEXIST') {
                    throw err;
                }
            }
            fs.writeFile(this.accessTokenFilePath, JSON.stringify(token));
            console.log('Token stored to ' + this.accessTokenFilePath);
        }
    }

    getAuthClient() {
        // NOTE: using `require` as 'JSON.parse(fs.readFileSync(...))'
        const installedCredentials = require(this.credentialFilePath).installed;
        const auth = new googleAuth();
        const oauth2Client = new auth.OAuth2(installedCredentials.client_id,
                                             installedCredentials.client_secret,
                                             installedCredentials.redirect_uris[0]);

        if (fs.existsSync(this.accessTokenFilePath)) {
            oauth2Client.credentials = require(this.accessTokenFilePath);
        }

        return oauth2Client;
    }
}

module.exports = GoogleAuthenticator;
