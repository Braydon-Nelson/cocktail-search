CREATE DATABASE cocktails_db;

USE cocktails_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null,
	PRIMARY KEY (id)
);

CREATE TABLE favorites
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50),
    picURL varchar(50),
    ingredients varchar(50),
    ingredientMeasurements varchar(50),
    description varchar(50),
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);
