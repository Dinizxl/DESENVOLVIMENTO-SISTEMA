async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
// Inicialmente, tem uma função que faz ligação com o API, ela está inserida na estrutura Try Catch, ela permite fazer tratamento de erro no código.
}

function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Limpa a lista existente
// Essa função manipula a lista.
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listItem.onclick = () => showUserDetails(user);
    userList.appendChild(listItem);
//  Acresenta informações na div. Capturando o ID da ul e cria 05 sub-itens, sendo eles: Nome, e-mail, endereço e site.
  });

}

fetchUsers(); // Chama a função ao carregar a página

function showUserDetails(user) {
  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}
// Essa função ela pega a ID da div, com as informações da API, ela cria 05 tags no HTMl, H2 e 04 parágrafos.