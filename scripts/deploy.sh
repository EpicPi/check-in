#!/bin/bash

base=$(dirname $0)/../
pem="~/.ssh/eventensure.pem"
url=ubuntu@eec2-52-207-19-214.compute-1.amazonaws.com
dest="${url}:~/"

echo This deploys the eventensure app to the ec2 url located at ${url}

cd ${base}

npm run build
echo built

scp -i ${pem} server.js package.json ${dest}new/
scp -i ${pem} -r backend/ ${dest}new/
scp -i ${pem} public/app.css public/index.html public/bundle.js ${dest}new/
echo sent new files

ssh -i ${pem} ${url} << END
    echo i am now sshed in

    pm2 kill

    rm -rf server/backend

    rm -rf server/public/
    rm server/package.json
    rm server/server.js
    echo removed old files

    mv new/backend/ server/backend/
    mv new/server.js server/
    mv new/package.json server/
    mv new/ server/public
    echo moved new files into the appropriate places

    mkdir new
    echo setup for next import

    cd server/
    npm install --only=production
    echo npm installed
    cd ..
    ./init.sh
    exit
END




