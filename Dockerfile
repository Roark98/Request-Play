FROM node:alpine


WORKDIR /app/test

COPY ./api/package*.json ./

RUN npm install

COPY ./api/ .

CMD ["npm", "run", "test"]