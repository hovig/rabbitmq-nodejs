FROM node:latest
MAINTAINER Hovig Ohannessian <hovigg@hotmail.com>
WORKDIR /app
ADD . /app
RUN  npm install
EXPOSE 5000
RUN npm start
