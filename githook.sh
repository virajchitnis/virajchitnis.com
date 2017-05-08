#!/bin/sh

export PATH="/root/.nvm/versions/node/v6.10.1/bin:${PATH}"

echo "Updating code..." >> ./logs/console.log
git pull
yarn
yarn build
echo "Restarting..." >> ./logs/console.log
./node_modules/forever/bin/forever stopall
./node_modules/forever/bin/forever start -o ./logs/console.log server.js
echo "Done updating." >> ./logs/console.log
