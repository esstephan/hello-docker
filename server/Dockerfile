FROM node:lts-alpine3.12
WORKDIR /hello-docker
COPY src .
COPY package.json .
RUN yarn global add nodemon
RUN yarn install
CMD ["node", "src/index.js"]

