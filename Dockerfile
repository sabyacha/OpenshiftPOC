FROM ubuntu:latest

LABEL maintainer="sabyasachi.ch@gmail.com"

COPY . /src

WORKDIR /src

RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm

RUN npm install mysql


RUN npm install -g npm@latest
EXPOSE 8080

ENTRYPOINT ["node", "./helloworld.js"]

