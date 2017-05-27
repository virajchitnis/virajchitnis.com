#!/bin/sh

export PATH="/root/.nvm/versions/node/v6.10.1/bin:${PATH}"

git pull
yarn redeploy
./node_modules/forever/bin/forever restartall
