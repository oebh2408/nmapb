CREATE DATABASE nmapbank_db;

USE nmapbank_db;

CREATE TABLE cliente(
    num_identificacion BIGINT(100) NOT NULL PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL, 
    tipo_identificacion VARCHAR(100) NOT NULL,
    pais_nacimiento VARCHAR(100) NOT NULL,
    estado_civil VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono BIGINT(100) NOT NULL
);

CREATE TABLE cuentabancaria(
    id_cuenta BIGINT(100) NOT NULL PRIMARY KEY,
    fk_id_sede BIGINT(100) NOT NULL,
    fk_num_identificacion BIGINT(100) NOT NULL,
    fecha_apertura DATE NOT NULL,
    saldo BIGINT(100) NOT NULL,
    cuota_manejo BIGINT(100) NOT NULL,
    transc_virtuales VARCHAR(100) NOT NULL,
    monto_max_retiros BIGINT(100) NOT NULL,
    estado_cuenta VARCHAR(100) NOT NULL
);

CREATE TABLE registroTransaccion(
    id_registro BIGINT(100) NOT NULL PRIMARY KEY,
    fk_id_cuenta BIGINT(100) NOT NULL,
    monto BIGINT(100) NOT NULL,
    cuenta_destino BIGINT(100) NOT NULL,
    fecha_transaccion DATE NOT NULL,
    fk_id_empleado BIGINT(100) NOT NULL
);

CREATE TABLE empleado(
    num_identificacion BIGINT(100) NOT NULL PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono BIGINT(100) NOT NULL,
    fk_id_sede BIGINT(100) NOT NULL
);

CREATE TABLE sede(
    id_sede BIGINT(100) NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono BIGINT(100) NOT NULL,
    fk_id_ciudad BIGINT(100) NOT NULL
);

CREATE TABLE ciudad(
    id_ciudad BIGINT(100) NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cantidad_sucursales BIGINT(100) NOT NULL
);

CREATE TABLE contrato(
    id_contrato BIGINT(100) NOT NULL PRIMARY KEY,
    tipo_contrato VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    fk_id_sede BIGINT(100) NOT NULL,
    fk_id_empleado BIGINT(100) NOT NULL
);

ALTER TABLE cuentabancaria
ADD
CONSTRAINT CB_S FOREIGN KEY(fk_id_sede)
REFERENCES sede(id_sede);

ALTER TABLE cuentabancaria
ADD
CONSTRAINT CB_C FOREIGN KEY(fk_num_identificacion)
REFERENCES cliente(num_identificacion);

ALTER TABLE registroTransaccion
ADD
CONSTRAINT RT_CB FOREIGN KEY(fk_id_cuenta)
REFERENCES cuentabancaria(id_cuenta);

ALTER TABLE registroTransaccion
ADD
CONSTRAINT RT_E FOREIGN KEY(fk_id_empleado)
REFERENCES empleado(num_identificacion);

ALTER TABLE empleado
ADD
CONSTRAINT E_S FOREIGN KEY(fk_id_sede)
REFERENCES sede(id_sede);

ALTER TABLE sede
ADD
CONSTRAINT S_C FOREIGN KEY(fk_id_ciudad)
REFERENCES ciudad(id_ciudad);

ALTER TABLE contrato
ADD
CONSTRAINT C_S FOREIGN KEY(fk_id_sede)
REFERENCES sede(id_sede);

ALTER TABLE contrato
ADD
CONSTRAINT C_E FOREIGN KEY(fk_id_empleado)
REFERENCES empleado(num_identificacion);
