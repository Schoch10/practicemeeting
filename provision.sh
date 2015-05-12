#!/bin/bash

apt-get update

echo '***************Installing Node JS******************'
sudo sed -i -e 's/us.archive.ubuntu.com/archive.ubuntu.com/g' /etc/apt/sources.list
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

echo '***************Installing NPM**********************'
sudo apt-get install -y npm  

echo '***************Update Ruby Gems********************'
sudo apt-get install -y ruby1.9.3
sudo apt-get install -y rubygems1.9.3
sudo gem install rainbow
sudo gem install scss-lint

echo '***************Install NPM dependencies************'
cd ../../vagrant 
sudo npm config set registry http://registry.npmjs.org/
sudo npm install -g grunt-cli
sudo npm install --save-dev --no-bin-links
#sudo npm install karma-phantomjs-launcher --save-dev
#sudo npm config set registry http://registry.npmjs.org/
#sudo npm -g install grunt --no-bin-links

