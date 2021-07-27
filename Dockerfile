FROM node:16-alpine

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]