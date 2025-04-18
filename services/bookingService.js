const { pool } = require('../db/connection');

async function salvarAgendamento(telefone, servico, dataHora) {
  await pool.query(
    'INSERT INTO agendamentos (telefone, servico, data_hora) VALUES ($1, $2, $3)',
    [telefone, servico, dataHora]
  );
}

module.exports = { salvarAgendamento };