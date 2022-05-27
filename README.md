# How to run the microservices throgh API Gateway

## products microservice with MySQL

```
cd /products
docker-compose up
```

## orders microservice with MongoDB

```
cd /orders
docker-compose up
```

## API Gateway Pattern Architecture

```
cd /api-gateway
npm start
```

## Using API Gateway on browser

```
http://localhost:3007/orders
http://localhost:3007/products
```
