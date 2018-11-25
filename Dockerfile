FROM node:10.13.0-alpine

COPY app.js /app.js

ENTRYPOINT ["node", "/app.js"]
