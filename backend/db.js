import mysql from 'mysql2/promise';

// Altere os dados abaixo conforme seu ambiente MariaDB/HeidiSQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'syb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
