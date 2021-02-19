FROM node:lts-alpine3.13 as node

ARG env=ENVIRONMENT

WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/

RUN npm run build:${env}

FROM nginxinc/nginx-unprivileged
COPY --from=node /app/dist/demo-web2 /usr/share/nginx/html
