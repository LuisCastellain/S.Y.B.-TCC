import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Adicionar lançamento financeiro
router.post('/add', async (req, res) => {
  const { usuario_id, tipo, valor, categoria, descricao, data } = req.body;
  try {
    await pool.query(
      'INSERT INTO financeiro (usuario_id, tipo, valor, categoria, descricao, data) VALUES (?, ?, ?, ?, ?, ?)',
      [usuario_id, tipo, valor, categoria, descricao, data]
    );
    res.status(201).json({ message: 'Lançamento financeiro adicionado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar lançamento financeiro.' });
  }
});

// Listar lançamentos financeiros de um usuário
router.get('/list/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM financeiro WHERE usuario_id = ? ORDER BY data DESC',
      [usuario_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar lançamentos financeiros.' });
  }
});

// Editar lançamento financeiro
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { tipo, valor, categoria, descricao, data } = req.body;
  try {
    await pool.query(
      'UPDATE financeiro SET tipo = ?, valor = ?, categoria = ?, descricao = ?, data = ? WHERE id = ?',
      [tipo, valor, categoria, descricao, data, id]
    );
    res.json({ message: 'Lançamento financeiro atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar lançamento financeiro.' });
  }
});

// Excluir lançamento financeiro
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM financeiro WHERE id = ?', [id]);
    res.json({ message: 'Lançamento financeiro excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir lançamento financeiro.' });
  }
});

export default router;
