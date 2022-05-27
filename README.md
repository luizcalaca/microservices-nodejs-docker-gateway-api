# How to run the microservices throgh API Gateway

## products microservice

```
cd /products
docker-compose up
```

## orders microservice

```
cd /orders
docker-compose up
```

## API Gateway

```
cd /api-gateway
npm start
```

## Using API Gateway on browser

```
http://localhost:3007/orders
http://localhost:3007/products
```
