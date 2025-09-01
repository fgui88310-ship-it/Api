function enviarMensagem() {
  const input = document.getElementById("input").value;
  const respostaDiv = document.getElementById("resposta");

  // Troque a URL pelo seu endpoint Vercel ou Netlify
  fetch('https://seu-endpoint.vercel.app/api/mensagem', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({mensagem: input})
  })
  .then(res => res.json())
  .then(data => {
    respostaDiv.innerText = data.resposta;
  })
  .catch(err => {
    respostaDiv.innerText = "😢 Ops, não consegui falar com o bot!";
  });
}