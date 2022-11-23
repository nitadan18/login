# Docker

## Docker compose
Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.

commands:
```
start : 
docker-compose -p "login" up -d --build --remove-orphans

stop : 
docker-compose -p "login" kill
```

[docker-compose.yaml](/docker/docker-compose.yml)
```
version: '3'

services:

  login-web:
    container_name: login-web
    build:
      context: '${PWD}/../frontend'
      dockerfile: 'Dockerfile.dev'
    volumes:
      - '${PWD}/../frontend:/var/www'
      - '/var/www/node_modules'
    ports:
      - '4000:4000'
    depends_on:
      - login-db
      - login-api
    environment:
      - CHOKIDAR_USEPOLLING=true
    tty: true
    stdin_open: true
    networks:
      - login

  login-api:
    container_name: login-api
    environment:
      - NODE_ENV=develop
    build:
      context: '${PWD}/../backend'
      dockerfile: 'Dockerfile.dev'
    ports:
      - '4001:4001'
    depends_on:
      - login-db
    volumes:
      - '${PWD}/../backend:/var/www'
      - '/var/www/node_modules'
    networks:
      - login

  login-db:
    container_name: login-db
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=login
    tty: true
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data/
      - ./db/init.sql:/docker-entrypoint-initdb.d/create_tables.sql
    networks:
      - login

volumes:
  postgres_data:
  cache:
    driver: local

networks:
  login:
    driver: bridge
```

## Backend - dockerization
- Nodejs + Typescript

[Dockerfile.dev](/backend/Dockerfile.dev)
```
FROM node:18

WORKDIR /var/www

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 4001

CMD ["npm", "run", "dev"] 
```

## Frontend - dockerization
- Reactjs

[Dockerfile.dev](/frontend/Dockerfile.dev)
```
FROM node:18

WORKDIR /var/www

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . ./

EXPOSE 4000

CMD ["npm", "start"]
```