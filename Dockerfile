FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# copy local angular/nest code to the container
COPY . .
# Build production app
RUN npm run build:ssr
CMD ["npm", "run", "serve:ssr"]
