const axios = require('axios');

async function responderMensagem(mensagem) {
  const prompt = `
Você é uma assistente de agendamento para uma manicure. Responda com simpatia e praticidade. Se for uma dúvida sobre horário, preço ou agendamento, responda direto.
Mensagem da cliente: "${mensagem}"
  `;

  const resposta = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json"
    }
  });

  return resposta.data.choices[0].message.content.trim();
}

module.exports = { responderMensagem };