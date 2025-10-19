document.getElementById("emprestimoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = e.target.nome.value;
  const valor = e.target.valor.value;

  document.getElementById("mensagemForm").textContent =
    `Obrigado, ${nome}. Sua solicitação de R$${valor} foi recebida. Em breve entraremos em contato.`;
  
  e.target.reset();
});

function gerarPagamento() {
  const area = document.getElementById("areaPagamento");
  const valorTaxa = "50.00";

  area.innerHTML = `
    <p>Taxa de liberação: <strong>R$ ${valorTaxa}</strong></p>
    <p>Copie e cole o código Pix abaixo no seu app bancário:</p>
    <code style="background:#eee;padding:10px;display:block;">pix@empresa.com.br|R$${valorTaxa}|Identificador: EMP123456</code>
    <p><em>* Esse é um exemplo simulado de pagamento Pix</em></p>
  `;
}
