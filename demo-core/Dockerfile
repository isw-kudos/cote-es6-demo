FROM node:alpine

USER root

RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm i
RUN npm run build

ENV NODE_ENV production

CMD ["npm", "run", "start"]
