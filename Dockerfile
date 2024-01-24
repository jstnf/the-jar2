FROM node:20.11.0-alpine3.18

WORKDIR /app

COPY discord_bot/package*.json ./

RUN npm install

COPY discord_bot ./

RUN npm run build

CMD ["npm", "start"]
