#/bin/bash

mkdir -p /home/picuntu/workspace/sCamera/opt/nginx/logs
touch /home/picuntu/workspace/sCamera/opt/nginx/logs/error.log

/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera/opt/nginx -s reload -c conf/nginx.conf





mkdir -p /home/picuntu/workspace/sCamera/logs
touch /home/picuntu/workspace/sCamera/logs/error.log

/opt/nginx/sbin/nginx -p /home/picuntu/workspace/sCamera -s reload -c conf/nginx.conf

