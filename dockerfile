FROM node:latest

WORKDIR /usr/src/app


ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
