FROM node:13-alpine

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3030
CMD [ "node", "server.js" ]