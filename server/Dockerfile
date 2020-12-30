FROM node:lts-alpine3.12
WORKDIR /hello-docker
COPY src src
COPY package.json .
RUN yarn global add nodemon
RUN yarn install
EXPOSE 3200
CMD ["node", "src/index.js"]