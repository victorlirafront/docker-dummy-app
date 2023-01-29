FROM node:alpine

# RUN mkdir -p /home/node/server && chown -R node:node /home/node/server

WORKDIR /user/app

# RUN mkdir -p node_modules && chown -R node:node node_modules

COPY package*.json ./

RUN npm install

# RUN npm

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]