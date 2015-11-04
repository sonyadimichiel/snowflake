#!/usr/bin/env bash

echo "Provisioning virtual machine ..."

apt-get update

echo "Installing Git"
apt-get install git -y

echo "Installing Nginx"
apt-get install nginx -y
if ! [ -L /var/www ]; then
   rm -rf /var/www
   ln -fs /vagrant /var/www
fi

echo "Updating PHP repository"
apt-get install python-software-properties build-essential -y
add-apt-repository ppa:ondrej/php5 -y
apt-get update

echo "Installing PHP"
apt-get install php5-common php5-dev php5-cli php5-fpm -y

echo "Installing PHP extensions"
apt-get install curl php5-curl php5-gd php5-mcrypt php5-mysql -y

echo "Installing Nginx"
apt-get install nginx -y

echo "Configuring Nginx"
cp /var/www/develop/nginx/nginx_vhost /etc/nginx/sites-available/nginx_vhost
if ! [ -L /etc/nginx/sites-enabled/nginx_vhost ] ; then
	ln -s /etc/nginx/sites-available/nginx_vhost /etc/nginx/sites-enabled/
	rm -rf /etc/nginx/sites-available/default
fi
service nginx restart > /dev/null

echo "Installing MySQL"
apt-get install debconf-utils -y
debconf-set-selections <<< "mysql-server mysql-server/root_password password 1234"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password 1234"
apt-get install mysql-server -y

