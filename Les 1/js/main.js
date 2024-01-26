const games = [
  { title: "Fortnite", description: "Battle royale spel" },
  { title: "Rocket leag", description: "Autos spel" },
  { title: "Call Of Duty", description: "Wapens spel" },
  { title: "UFC", description: "Vecht spel" },
];

const project = [
  {
    title: "Hoger Lager",
    description: "Raad spel",
    img: "img/hoger lager.jpg",
  },
  {
    title: "Escape Room",
    description: "Escape spel",
    img: "img/escape room.jpg",
  },
];

function createProject(title, description, img) {
    let projectCard = `
    <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
    <img src="${img}" alt="">
</div>
      `;
    return projectCard;
  }

  const projectContainer = document.querySelector(".projects-container");

  for (let i = 0; i < project.length; i++) {
    const p = project[i];
    projectContainer.innerHTML += createProject(p.title, p.description, p.img);
  }

const cards = document.querySelector(".card");

function createCard(title, description) {
  let cardHtml = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <button>Koop nu</button>
  </div>
    `;
  return cardHtml;
}

const cardContainer = document.querySelector(".card-container");

for (let i = 0; i < games.length; i++) {
  const game = games[i];
  cardContainer.innerHTML += createCard(game.title, game.description);
}
