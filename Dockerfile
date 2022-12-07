FROM node:alpine


WORKDIR /app/test

COPY ./api/package*.json ./

RUN npm install && npm update && npm cache clean --force

COPY ./api/ .

CMD ["npm", "run", "test"]