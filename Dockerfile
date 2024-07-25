FROM node:22-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm i 

COPY src/ .
EXPOSE 3000
CMD ["npm", "run", "start"]
