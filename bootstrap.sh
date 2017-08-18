#!/bin/sh

source env.sh

echo "started bootstrap process"
echo ""
echo "---Settings---"
echo "Dash Button MAC Address: $DASH_BUTTON_MAC_ADDRESS"
echo "Token Directory Path: $TOKEN_DIRECTORY_PATH"
echo "Google APIs Access Token File Path: $ACCESS_TOKEN_FILE_PATH"
echo "Google APIs Credential File Path: $CREDENTIAL_FILE_PATH"
echo "--------------"
echo ""

node src/bootstrap.js

echo "finished bootstrap process"
