drop database if exists estacionamento;

create database estacionamento charset = UTF8 collate utf8_general_ci;

use estacionamento;

create table clientes(
    cpf varchar(20) not null primary key,
    nome varchar(50) not null,
    telefone varchar(50) not null,
    endereco varchar(50) not null
);

create table veiculos(
    placa varchar(15) not null primary key,
    marca varchar(20) not null,
    modelo varchar(50) not null,
    cor varchar(50) not null,
    ano varchar(10) not null
);

create table vaga(
    id_vaga varchar(20) not null primary key,
    ocupada boolean
);

create table entrada(
    placa varchar(50) not null,
    cpf varchar(20) not null,
    hora_entrada date not null,
    hora_saida date,
    valor_hora float(5, 2) not null,
    vaga varchar(20) not null,
    foreign key (placa) references veiculos(placa),
    foreign key (cpf) references clientes(cpf),
    foreign key (vaga) references vaga(id_vaga)
);


create view vw_dia as
select
    c.cpf as cliCPF,
    c.nome as cliNome,
    v.placa as vPlaca,
    v.modelo as vModelo,
    e.vaga as vaga,
    e.hora_entrada as horaEntrada,
    e.hora_saida as horaSaida,
    e.valor_hora as valorHora
from
    clientes c
    inner join entrada e on c.cpf = e.cpf
    inner join veiculos v on v.placa = e.placa;

show tables;

select
    *
from
    vw_dia;

INSERT INTO clientes VALUES ('43565489504', 'jean', '19 987428374','rua tal do bairro tal');
INSERT INTO veiculos VALUES ('KDL-7857', 'BMW', 'Conversível','cinza','2015');
INSERT INTO vaga VALUES ('A2', "false");

