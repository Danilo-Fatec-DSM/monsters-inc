function banco() {
  const bancoDeDados = [
    { id: 1, nome: "Zamengo", senha: "12345", email: "zamengo12@gmail.com" },
    { id: 2, nome: "Pedro", senha: "123456", email: "pedro12@gmail.com" },
    { id: 3, nome: "Eduardo", senha: "1234567", email: "eduardo12@gmail.com" },
  ];
  let json = JSON.stringify(bancoDeDados);
  localStorage.setItem("banco", json);
}

function adicionar() {
  let bancoDeDados = JSON.parse(localStorage.getItem("banco")) || [];
  console.log(bancoDeDados);
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let cd = { id: Date.now(), nome: nome, senha: senha, email: email };
  bancoDeDados.push(cd);
  localStorage.setItem("banco", JSON.stringify(bancoDeDados));
  window.location.href = "login.html";
}

function logar() {
  let bancoDeDados = JSON.parse(localStorage.getItem("banco"));
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  for (let i = 0; i < bancoDeDados.length; i++) {
    if (bancoDeDados[i].email == email && bancoDeDados[i].senha == senha) {
      window.location.href = "index.html";
      alert(bancoDeDados[i].nome + " logou");
    }
  }
}

function deletar() {
  let bancoDeDados = JSON.parse(localStorage.getItem("banco"));
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let novoBanco = bancoDeDados.filter(
    (user) => !(user.email === email && user.senha === senha)
  );
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (novoBanco.length !== bancoDeDados.length) {
      localStorage.setItem("banco", JSON.stringify(novoBanco));
      alert("Usuário removido com sucesso!");
      break;
    } else {
      alert("Usuário não encontrado!");
      break;
    }
  }
}

function atualizar() {
  const id = document.getElementById("id").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const nome = document.getElementById("nome").value;

  const users = JSON.parse(localStorage.getItem("banco"));

  for (let i = 0; i < users.length; i++) {
    if (users[i] == null) {
      continue;
    } else if (users[i].id == id && users[i].senha == senha) {
      users[i].email = email;
      users[i].password = senha;
      users[i].nome = nome;

      localStorage.setItem("banco", JSON.stringify(users));

      alert("Atualizado");
    }
  }
}
