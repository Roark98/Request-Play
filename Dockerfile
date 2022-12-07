FROM node:alpine


WORKDIR /app

COPY ./api/package*.json ./

RUN npm install

COPY ./api/ .

CMD ["npm", "run", "test"]