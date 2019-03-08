https://console.developers.google.com/apis/credentials?
https://mlab.com/databases/mern-dev
https://console.aws.amazon.com/ec2/
ec2-34-229-24-136.compute-1.amazonaws.com

server set up:
sudo apt update
sudo apt upgrade
** install node 8 **
npm install pm2 -g
move init.sh to root of ec2
chmod +x init.sh

run npm run deploy on local machine

pm2 startup
pm2 save

reroute traffic from port 80 to port 3000 or w/e you put as the env variable
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
and put that line (wihtout sudo) into /etc/rc.local

AWS set up:
change security group inbound rules:
add http on port 80 to serve website
add custom tcp on port 3000 for backend
set up new elastic ip and associate it with running ec2 instance

Then set up route 53