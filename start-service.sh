#/bin/bash

mkdir -p /home/picuntu/workspace/sCamera/opt/nginx/logs
touch /home/picuntu/workspace/sCamera/opt/nginx/logs/error.log

/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera/opt/nginx -t -c www_conf/nginx.conf
/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera/opt/nginx -c www_conf/nginx.conf





mkdir -p /home/picuntu/workspace/sCamera/logs
touch /home/picuntu/workspace/sCamera/logs/error.log

/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera -t -c www_conf/nginx.conf
/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera -c www_conf/nginx.conf

