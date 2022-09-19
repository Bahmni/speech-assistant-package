FROM nginx:1.23.1
RUN apt-get update
RUN apt-get --assume-yes install nginx-module-njs
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d
COPY feature.js /etc/nginx/conf.d
COPY feature.json /usr/share/nginx/html/json