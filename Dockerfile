FROM node:alpine

RUN mkdir -p /usr/apps/htxpt_fe_size
WORKDIR /usr/apps/htxpt_fe_size

COPY package*.json ./
RUN npm install

COPY . .

RUN sync && npm run build

EXPOSE 3101

CMD [ "npm", "run", "dev" ]
