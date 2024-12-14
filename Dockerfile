FROM node:alpine

WORKDIR /code
COPY . .

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]