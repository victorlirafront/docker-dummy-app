FROM node:alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend
# RUN mkdir -p /home/node/server && chown -R node:node /home/node/server

WORKDIR /usr/src/app/backend

# VOLUME . /usr/src/app/backend

# RUN mkdir -p node_modules && chown -R node:node node_modules

COPY package*.json ./

RUN npm install

# RUN npm

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]