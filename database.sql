CREATE DATABASE pet_hotel;

CREATE TABLE owners (
id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30)NOT NULL
);

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
pet_name VARCHAR(30)NOT NULL,
breed VARCHAR(30)NOT NULL,
color VARCHAR(30)NOT NULL,
owner_id INT REFERENCES owners
);

CREATE TABLE visits (
check_in_date DATE,
check_out_date DATE,
-- owners_id INT REFERENCES owners,
pets_id INT REFERENCES pets
);

INSERT INTO owners(first_name, last_name)
VALUES ('John', 'Boberton'),
('Veronica', 'Whirlberg');

INSERT INTO pets(pet_name, breed, color)
VALUES ('Wilbur', 'collie', 'grey'),
('BamBam', 'labrador', 'black');

INSERT INTO visits(check_in_date, check_out_date, pets_id)
VALUES ('2016-3-5', '2016-3-20', 1), ('2016-5-3', '2016-5-20', 1);
