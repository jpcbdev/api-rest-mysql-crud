CREATE DATABASE Recargas;

USE Recargas;

CREATE TABLE Empleado (
cedula_empleado VARCHAR(30) PRIMARY KEY NOT NULL,
primer_nombre VARCHAR(30) NOT NULL,
primer_apellido VARCHAR(30) NOT NULL
);

CREATE TABLE Telefonica (
 id_telefonica INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(50) NOT NULL,
 descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE Recarga (
id_recarga INT AUTO_INCREMENT PRIMARY KEY,
id_telefonica INT NOT NULL,
monto INT NOT NULL,
cliente VARCHAR (50) NOT NULL,
celular VARCHAR (50) NOT NULL,
fecha DATE NOT NULL,
FOREIGN KEY (id_telefonica) REFERENCES Telefonica(id_telefonica)
);

-- DROP DATABASE Recargas;

