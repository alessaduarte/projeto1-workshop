let dados = []; 

const elementoH1 = document.querySelector('h1');
const btn = document.querySelector('.btn-azul');

btn.addEventListener("click", () => {
  let article = document.querySelectorAll('article');
  for (let i = 0; i < article.length; i++) {
    article[i].remove();
  }
    dados = [];
    elementoH1.innerText = `${dados.length} monstros`;
});

async function renderizar() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dadosJSON = await response.json();

  dados = dadosJSON.slice(0, 5);
  elementoH1.innerText = `${dados.length} monstros`;

  for (let objeto of dados) {
    const elemtArticle = document.createElement("article");
    elemtArticle.classList.add("monstros");

    elemtArticle.innerHTML = `
    <img src="https://robohash.org/${objeto.id}?set=set2" alt="monstro" />
      <div>
        <h2>${objeto.name}</h2>
        <p>${objeto.email}</p>
      </div>
    `;

    elementoH1.insertAdjacentElement("afterend", elemtArticle);
    }
  }

renderizar();

console.loh("primeiro");