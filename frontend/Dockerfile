# Build Angular App
FROM node:16.13-alpine AS build
WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
COPY . .
RUN npm install

RUN npm run build

# Run 
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html
EXPOSE 8049
CMD ["nginx", "-g", "daemon off;"]