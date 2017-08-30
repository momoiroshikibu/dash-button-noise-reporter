const GoogleAuthenticator = require('./GoogleAuthenticator');
const Config = require('./config');

const googleAuthenticator = new GoogleAuthenticator({
    tokenDirectoryPath: Config.tokenDirectoryPath,
    credentialFilePath: Config.credentialFilePath,
    accessTokenFilePath: Config.accessTokenFilePath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

googleAuthenticator.generateNewToken();
