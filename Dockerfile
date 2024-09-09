FROM node:20.11 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .
RUN yarn global add typescript
RUN yarn install --production=false

RUN apt-get -q update && apt-get -qy install netcat-traditional

COPY . .


RUN yarn build 

CMD ["sh", "-c", "yarn start:prod"]