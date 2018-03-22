#!/bin/bash

echo this is meant to be run on the ec2 instance, it wont work on your machine

export GOOGLE_CLIENT_ID=i'm
export GOOGLE_CLIENT_SECRET=not
export MONGO_URI=telling
export COOKIE_KEY=you
export PORT=3000
export NODE_ENV=production

pm2 start ~/server/server.js --name server
