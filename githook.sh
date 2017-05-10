#!/bin/sh

export PATH="/root/.nvm/versions/node/v6.10.1/bin:${PATH}"

git pull
yarn
yarn build
./node_modules/forever/bin/forever restartall
