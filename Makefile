WC    := $(shell pwd)
NGINX := /opt/nginx/sbin/nginx

.PHONY : all env start restart test

all:start

start:env
	sudo $(NGINX) -p $(WC) -c $(WC)/conf/nginx.conf
	make -C websocket/nodejs-version/ all
	make -C peerjs-server/ all
restart:env
	sudo $(NGINX) -s reload -p $(WC) -c $(WC)/conf/nginx.conf
test:
	sudo $(NGINX) -t -p $(WC) -c $(WC)/conf/nginx.conf
env:
	mkdir -p $(WC)/logs
	
