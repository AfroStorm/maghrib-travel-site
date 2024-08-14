FROM node

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

USER node:node

EXPOSE 5174

CMD [ "npm","run","dev" ]