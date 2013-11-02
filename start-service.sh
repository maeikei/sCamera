#/bin/bash
mkdir -p ./logs/
touch ./logs/error.log
/opt/nginx/sbin/nginx -p ./ -t -c www_conf/nginx.conf
/opt/nginx/sbin/nginx -p ./ -c www_conf/nginx.conf

