DROP DATABASE IF EXISTS med_center;
CREATE DATABASE med_center;
\c med_center;

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    specialty TEXT NOT NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    diseases TEXT NOT NULL
);

CREATE TABLE joiner (
    id SERIAL PRIMARY KEY,
    doctor INTEGER REFERENCES doctors(id),
    patient INTEGER REFERENCES patients(id)
);


INSERT INTO doctors (first_name, last_name, specialty)
VALUES 
('Derek', 'Shepherd', 'Neurosurgery'),
('Owen', 'Hunt', 'Trauma'),
('Cristina', 'Yang', 'Cardiothoracic Surgery'),
('Teddy', 'Altman', 'Cardiothoracic Surgery'),
('Alex', 'Karev', 'Pediatric Surgery');


INSERT INTO patients (first_name, last_name, diseases) 
VALUES 
('Henry', 'Burton', 'Von-Hippel-Lindau Syndrome'),
('Winnie', 'Adkins', 'Crush injuries'),
('Holly', 'Anderson', 'Basilar Skull Fracture, Hemopericardium'),
('Isaac', 'Fahir', 'Spinal Cord Tumor');


INSERT INTO joiner (doctor, patient)
VALUES 
(4, 1),
(5, 1),

(3, 2),
(4, 2),
(5, 2),

(1, 3),
(5, 3),
(3, 3),

(1, 4),
(3, 4);




-- CREATE TABLE diseases {
--     id SERIAL PRIMARY KEY
--     disease_name TEXT NOT NULL
--     specialty TEXT NOT NULL
--     patient INTEGER REFERENCE patients
-- }

