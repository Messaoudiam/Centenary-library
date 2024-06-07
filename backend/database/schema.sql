CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role_id INT,
    PRIMARY KEY (id),
    UNIQUE(email),
    FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE item (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(225),
    author VARCHAR(225),
    language VARCHAR(100),
    PRIMARY KEY (id)
);
