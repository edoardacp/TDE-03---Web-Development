async function carregarUsuarios() {
  const caixa = document.getElementById("resultado");
  caixa.textContent = "Carregando dados...";

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    const dados = await resposta.json();
    caixa.textContent = JSON.stringify(dados, null, 2);

  } catch (erro) {
    caixa.textContent = "⚠ Erro: " + erro.message;
  }
}

async function criarUsuario() {
  const caixa = document.getElementById("resultado");
  caixa.textContent = "Enviando dado...";

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Edoarda Cenci Piraí",
        email: "edoarda@email.com",
        username: "edoarda777"
      })
    });

    if (!resposta.ok) {
      throw new Error("Erro ao criar usuário");
    }

    const dados = await resposta.json();
    caixa.textContent = "Usuário criado:\n\n" + JSON.stringify(dados, null, 2);

  } catch (erro) {
    caixa.textContent = "⚠ Erro: " + erro.message;
  }
}
