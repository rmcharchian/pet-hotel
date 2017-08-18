CREATE TABLE owners (
id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30)NOT NULL
);

SELECT * FROM owners;

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
pet_name VARCHAR(30)NOT NULL,
breed VARCHAR(30)NOT NULL,
color VARCHAR(30)NOT NULL
);

SELECT * FROM pets;

CREATE TABLE visits (
check_in_date DATE,
check_out_date DATE,
owners_id INT REFERENCES owners,
pets_id INT REFERENCES pets 
);

SELECT * FROM visits;

