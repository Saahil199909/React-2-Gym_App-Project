FROM ubuntu:latest

WORKDIR /personal-app

COPY . /personal-app

RUN apt update -y && apt install nodejs -y && apt install npm -y && npm install -y 

EXPOSE 2001

CMD ["npm", "run", "dev"]
