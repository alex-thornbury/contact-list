FROM node:14

WORKDIR /app
COPY . .

RUN npm install --silent -g n

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm --silent ci

EXPOSE 3000
