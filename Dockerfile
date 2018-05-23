FROM node:9-alpine
RUN npm install pm2 pm2-docker yarn -g

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 8080
CMD [ "pm2-docker", "process.json" ]