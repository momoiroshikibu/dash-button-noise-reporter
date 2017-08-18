const DashButton = require('node-dash-button');
const GoogleAuthenticator = require('./GoogleAuthenticator');
const record = require('./record');
const {dashButtonMacAddress, credentialFilePath, accessTokenFilePath} = require('./Config');

// initialize
const dashButton = DashButton(dashButtonMacAddress, null, null, 'all');

const googleAuthenticator = new GoogleAuthenticator({
    credentialFilePath: credentialFilePath,
    accessTokenFilePath: accessTokenFilePath
});

// listen
dashButton.on('detected', () => {
    const eventHappenedAt = new Date();
    console.log('button pressed', eventHappenedAt);
    record(googleAuthenticator.getAuthClient(), eventHappenedAt);
});

