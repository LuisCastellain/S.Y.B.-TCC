import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Inserir compromisso
router.post('/add', async (req, res) => {
  const { usuario_id, titulo, descricao, data, hora } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO compromissos (usuario_id, titulo, descricao, data, hora) VALUES (?, ?, ?, ?, ?)',
      [usuario_id, titulo, descricao, data, hora]
    );
    res.status(201).json({ message: 'Compromisso inserido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir compromisso.' });
  }
});

// Listar compromissos de um usuário
router.get('/list/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM compromissos WHERE usuario_id = ? ORDER BY data, hora',
      [usuario_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar compromissos.' });
  }
});

export default router;
