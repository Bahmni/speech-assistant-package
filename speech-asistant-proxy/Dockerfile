FROM nginx:1.23.1
RUN apt-get update
RUN apt-get --assume-yes install nginx-module-njs
COPY speech-assistant /usr/share/nginx/html/speech-assistant
RUN chmod a+w /usr/share/nginx/html/speech-assistant/feature-enable.txt
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d
COPY featureToggle.js /etc/nginx/conf.d