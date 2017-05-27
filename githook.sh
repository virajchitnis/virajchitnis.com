#!/bin/sh

export PATH="/root/.nvm/versions/node/v6.10.1/bin:${PATH}"

git fetch origin
git checkout --force origin/master
yarn redeploy
./node_modules/forever/bin/forever restartall
