# build stage
FROM node:18-alpine as build-stage

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM node:18-alpine as production-stage
COPY --from=build-stage /app/.output /var/www

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", "/var/www/server/index.mjs"]
