FROM node:12.18.3 as forsage-ui
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install -g @angular/cli
RUN npm install
RUN npm run build

FROM nginx as forsage-nginx
COPY --from=forsage-ui /usr/src/app /usr/src/app