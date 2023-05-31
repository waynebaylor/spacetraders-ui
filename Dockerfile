FROM node:18 as build
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.24
COPY --from=build /build/dist /usr/share/nginx/html
