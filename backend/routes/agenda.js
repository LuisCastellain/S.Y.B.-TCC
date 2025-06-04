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

// Editar compromisso
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data, hora } = req.body;
  try {
    await pool.query(
      'UPDATE compromissos SET titulo = ?, descricao = ?, data = ?, hora = ? WHERE id = ?',
      [titulo, descricao, data, hora, id]
    );
    res.json({ message: 'Compromisso atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar compromisso.' });
  }
});

// Excluir compromisso
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM compromissos WHERE id = ?', [id]);
    res.json({ message: 'Compromisso excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir compromisso.' });
  }
});

export default router;
