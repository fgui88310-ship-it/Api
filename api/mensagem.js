export default function handler(req, res) {
  if (req.method === "POST") {
    const { mensagem } = req.body;
    res.status(200).json({ resposta: `Você disse: ${mensagem} uwu 💖` });
  } else {
    res.status(405).json({ erro: "Método não permitido" });
  }
}