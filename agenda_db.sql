CREATE DATABASE IF NOT EXISTS agenda_db;
USE agenda_db;
CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dia INT NOT NULL,
    mes VARCHAR(20) NOT NULL,
    compromisso VARCHAR(255) NOT NULL,
    horario VARCHAR(10) NOT NULL,
    prioridade ENUM('alta', 'media', 'baixa') NOT NULL
);