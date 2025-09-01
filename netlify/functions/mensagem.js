exports.handler = async function(event, context) {
  if (event.httpMethod === "POST") {
    const { mensagem } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ resposta: `Você disse: ${mensagem} uwu 💖` })
    };
  } else {
    return { statusCode: 405, body: "Método não permitido" };
  }
};