const setDadosPersonagens = function (listaDePersonagens) {
  let cardProdutos = document.getElementById("cardProdutos");

  listaDePersonagens.results.forEach(function (item) {
    let divCaixaProduto = document.createElement("div");

    let h2CaixaTitulo = document.createElement("h2");
    let textoTitulo = document.createTextNode(item.name);
    let figureCaixaImagem = document.createElement("figure");
    let img = document.createElement("img");
    let divCaixaTexto = document.createElement("div");
    let pCaixaTexto1 = document.createElement("p");
    let pCaixaTexto2 = document.createElement("p");
    let textoDescricao1 = document.createTextNode(`Status: ${item.status}`);
    let textoDescricao2 = document.createTextNode(`Espécie: ${item.species}`);

    divCaixaProduto.setAttribute("class", "caixa_produto");
    h2CaixaTitulo.setAttribute("class", "caixa_titulo");
    figureCaixaImagem.setAttribute("class", "caixa_imagem");
    img.setAttribute("src", item.image);
    img.setAttribute("alt", `Foto de ${item.name}`);
    img.setAttribute("title", `Personagem: ${item.name}`);
    divCaixaTexto.setAttribute("class", "caixa_texto");

    cardProdutos.appendChild(divCaixaProduto);
    divCaixaProduto.appendChild(h2CaixaTitulo);
    h2CaixaTitulo.appendChild(textoTitulo);
    divCaixaProduto.appendChild(figureCaixaImagem);
    figureCaixaImagem.appendChild(img);
    divCaixaProduto.appendChild(divCaixaTexto);
    divCaixaTexto.appendChild(pCaixaTexto1);
    divCaixaTexto.appendChild(pCaixaTexto2);
    pCaixaTexto1.appendChild(textoDescricao1);
    pCaixaTexto2.appendChild(textoDescricao2);
  });
};

const getPersonagensAPI = async function () {
  let url = "https://rickandmortyapi.com/api/character/";

  let response = await fetch(url);
  let dadosPersonagens = await response.json();

  setDadosPersonagens(dadosPersonagens);
};

window.addEventListener("load", function () {
  getPersonagensAPI();
});
