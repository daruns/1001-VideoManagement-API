FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .env ./

COPY . .

ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV
ENV API_PREFIX=$API_PREFIX
ENV UOLOAD_DESTINATION=$UOLOAD_DESTINATION

RUN npm run build

EXPOSE 8040

CMD ["npm", "start"]
