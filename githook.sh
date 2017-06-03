#!/bin/sh

export PATH="/root/.nvm/versions/node/v6.10.1/bin:${PATH}"

git fetch origin
git fetch --tags
latesttag=$(git describe --tags `git rev-list --tags --max-count=1`)
echo Deploying ${latesttag}
git checkout --force ${latesttag}

yarn redeploy
./node_modules/forever/bin/forever restartall
