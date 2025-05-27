import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Cadastro
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const [rows] = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
    if (rows.length > 0) {
      res.json({ message: 'Login realizado com sucesso!', usuario: rows[0] });
    } else {
      res.status(401).json({ error: 'E-mail ou senha inválidos.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao realizar login.' });
  }
});

export default router;
