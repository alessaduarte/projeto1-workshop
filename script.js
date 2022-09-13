let dados = []; 

const elementoH1 = document.querySelector('h1');
elementoH1.innerText = `${dados.length} monstros`;

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
    .then((response) => {
      if(response.status === 200) alert('Sucesso')
      else alert('Algo deu errado')
      return response.json();
    })
    .then((json) => {
      dados = json;
      console.log(json)

for (let objeto of dados) {
  const elemtArticle = document.createElement("article");
  elemtArticle.classList.add("monstros");

  elemtArticle.innerHTML = `
  <img src="${objeto.image}" alt="monstro" />
    <div>
      <h2>${objeto.name}</h2>
      <p>${objeto.email}</p>
    </div>
  `;

  elementoH1.insertAdjacentElement("afterend", elemtArticle);
}
});

const btn = document.querySelector('.btn-azul');

btn.addEventListener("click", () => {
  let article = document.querySelectorAll('article');
  for (let i = 0; i < article.length; i++) {
    article[i].remove();
  }
    dados = [];
    elementoH1.innerText = `${dados.length} monstros`;
});
