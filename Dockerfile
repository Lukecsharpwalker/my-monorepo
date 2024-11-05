FROM node:18-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

RUN echo "Build complete"
FROM node:18-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/ssg-app ./
CMD node server/server.mjs
EXPOSE 8080
