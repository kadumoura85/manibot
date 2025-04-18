const express = require('express');
const router = express.Router();
const { responderMensagem } = require('../services/openaiService');
const { salvarAgendamento } = require('../services/bookingService');

router.post('/', async (req, res) => {
  const mensagem = req.body.message;
  const telefone = req.body.phone;

  const resposta = await responderMensagem(mensagem);

  if (mensagem.toLowerCase().includes("agendar")) {
    await salvarAgendamento(telefone, 'manicure simples', '2025-04-20 15:00');
  }

  return res.status(200).json({ resposta });
});

module.exports = router;