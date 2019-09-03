#!/bin/bash
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y unrar
sudo ln -s `which nodejs` /usr/bin/node
sudo mkdir /var/nodes
sudo mkdir /var/nodes/easyrtc
sudo cp -r ertc/* /var/nodes/easyrtc
sudo cp easyrtc.conf /etc/init
cd /var/nodes/easyrtc
sudo npm install
sudo start easyrtc
