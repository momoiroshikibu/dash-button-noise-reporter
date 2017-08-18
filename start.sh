#!/bin/sh

# read environment variables
source env.sh

echo "Started Listening Dash Button"
echo ""
echo "---Settings---"
echo "Dash Button MAC Address: $DASH_BUTTON_MAC_ADDRESS"
echo "Token Directory Path: $TOKEN_DIRECTORY_PATH"
echo "Google APIs Access Token File Path: $ACCESS_TOKEN_FILE_PATH"
echo "Google APIs Credential File Path: $CREDENTIAL_FILE_PATH"
echo "Spread Sheet ID: $SPREAD_SHEET_ID"
echo "Spread Sheet Name: $SPREAD_SHEET_NAME"
echo "--------------"
echo ""

# start listener
node src/listener.js

echo "Now Listening Dash Button..."
