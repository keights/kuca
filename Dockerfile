FROM node:10.13.0-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
