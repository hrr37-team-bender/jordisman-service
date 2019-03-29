DROP DATABASE IF EXISTS Deepfryd;

CREATE DATABASE Deepfryd;

USE Deepfryd;

CREATE TABLE reviews
(
  id int NOT NULL AUTO-INCREMENT,
  review varchar(100) NOT NULL,
  rating Number NOT NULL,
  productId Number
);