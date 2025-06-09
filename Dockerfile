FROM node:22 AS build-deps
ARG SERVER_URL
ARG BASE_URL
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:1.28-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]