#!/bin/bash


set -e
set -x

rm -rf release/
mkdir release

export NVM_DIR="/usr/local/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

##### static
echo "ready to build scripts"

source ./env.sh
done=$( env_detect )
if ! $done
then
    nvm use --delete-prefix v9.2.0 --slient
    npm cache clean -f
    npm -v
    npm config set registry https://registry.npm.taobao.org
fi

git config url."git://".insteadOf "https://"

npm install
npm run build

##### copy to nginx
cp -r deploy release
mv dist/* release