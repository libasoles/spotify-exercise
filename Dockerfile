FROM node:10.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g yarn@1.12

RUN yarn install

COPY . .

RUN yarn