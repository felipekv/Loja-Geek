let itens = [
    {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

const listPaintings = [];
const listFigures = [];

function separateItens(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "Painting") {
      listPaintings.push(data[i]);
    } else if (data[i].type === "Action Figures") {
      listFigures.push(data[i]);
    }
  }
}

separateItens(itens);

const body = document.querySelector("body");
const paintingsList = document.querySelector(".paintingsList");
const figuresList = document.querySelector(".figuresList");

function renderCards(data, list) {
  for (let i = 0; i < data.length; i++) {
    const listCard = document.createElement("li");
    listCard.classList.add("listCard");

    const cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add("cardImageDiv");

    const cardImage = document.createElement("img");
    cardImage.classList.add("cardImage");
    cardImage.src = `${data[i].image}`;

    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("cardTitleDiv");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerHTML = `${data[i].name}`;

    const cardPriceDiv = document.createElement("div");
    cardPriceDiv.classList.add("cardPriceDiv");

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("cardPrice");
    cardPrice.innerHTML = `${data[i].price}`;

    cardPriceDiv.appendChild(cardPrice);
    cardTitleDiv.appendChild(cardTitle);
    cardImageDiv.appendChild(cardImage);

    listCard.append(cardImageDiv, cardTitleDiv, cardPriceDiv);
    console.log(paintingsList);
    list.append(listCard);
  }
}

renderCards(listPaintings, paintingsList);
renderCards(listFigures, figuresList);