#!/bin/bash

SECONDS=0
base=$(dirname $0)/../
pem=~/.ssh/eventensure.pem
url=ubuntu@ec2-52-207-19-214.compute-1.amazonaws.com
dest="${url}:~/"

echo This script deploys the EventEnsure app to the ec2 instance located at ${url}

cd ${base}
echo Changed directory to $(pwd)

npm run build
echo npm has run the build script located in package.json

scp -i ${pem} server.js package.json ${dest}new/
scp -i ${pem} -r backend/ ${dest}new/
scp -i ${pem} public/ ${dest}new/
echo Files were sent to the ec2 instance

ssh -i ${pem} ${url} << END
    echo ssh was successful

    pm2 kill
    echo current instance of the website was killed

    rm -rf server/backend
    rm -rf server/public/
    rm server/package.json
    rm server/server.js
    echo old version of the website was removed

    mv new/backend/ server/backend/
    mv new/server.js server/
    mv new/package.json server/
    mv new/public server/
    echo files have been moved to teh appropriate places
    echo stage is set for the next deploy

    cd server/
    npm install --only=production
    echo npm install was run

    echo starting new instance of the website
    ./../init.sh

    exit
END
duration=$SECONDS
echo deployment took "$(($duration / 60)) minutes and $(($duration % 60)) seconds"
