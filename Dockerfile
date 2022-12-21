FROM node:14.20-alpine

WORKDIR /app/test

USER root


COPY ./api/package*.json /app/test

RUN npm install && npm update && npm cache clean --force

COPY ./api/ .

CMD ["npm", "run", "test"]