class Config {
    constructor(env) {
        this.dashButtonMacAddress = env.DASH_BUTTON_MAC_ADDRESS;
        this.tokenDirectoryPath = env.TOKEN_DIRECTORY_PATH;
        this.accessTokenFilePath = env.ACCESS_TOKEN_FILE_PATH;
        this.credentialFilePath = env.CREDENTIAL_FILE_PATH;
        this.spreadSheetId = env.SPREAD_SHEET_ID;
        this.spreadSheetName = env.SPREAD_SHEET_NAME;
    }
}

module.exports = new Config(process.env);
