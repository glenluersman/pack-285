const cardsEl = document.querySelector('.cards');

const lion = [
    {name:'', image:'./assets/images/Lion.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Lion.png', position:''},
    {name:'', image:'./assets/images/Lion.png', position:''}
];

const tiger = [
    {name:'', image:'./assets/images/Tiger.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Tiger.png', position:''},
];

const wolf = [
    {name:'', image:'./assets/images/Wolf.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Wolf.png', position:''},
    {name:'', image:'./assets/images/Wolf.png', position:''},
    {name:'', image:'./assets/images/Wolf.png', position:''}
];
    
const bear = [
    {name:'', image:'./assets/images/Bear.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Bear.png', position:''},
    {name:'', image:'./assets/images/Bear.png', position:''},
    {name:'', image:'./assets/images/Bear.png', position:''},
    {name:'', image:'./assets/images/Bear.png', position:''},
    {name:'', image:'./assets/images/Bear.png', position:''},
];

const weblos = [
    {name:'', image:'./assets/images/Weblos.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Weblos.png', position:''},
    {name:'', image:'./assets/images/Weblos.png', position:''},
];

const aol = [
    {name:'', image:'./assets/images/Arrow_Of_Light.png', position:'Den Leader'},
    {name:'', image:'./assets/images/Arrow_Of_Light.png', position:''},
    {name:'', image:'./assets/images/Arrow_Of_Light.png', position:''},
];

const leaders = [
    {name:'Nick Lesher', image:'./assets/images/Cubmaster.png', position:'Cub Master'},
    {name:'Melinda Luersman', image:'./assets/images/Committee_Chair.png', position:'Committee Chair'},
    {name:'', image:'./assets/images/Assistant_Cubmaster.png', position:'Assistant Cubmaster'},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
    {name:'', image:'', position:''},
];

function createCards(value) {
    cardsEl.innerHTML = '';
    
    for (i = 0; i < value.length; i++) {
        // const cardsContainer = document.createElement('section');
        // cardsContainer.setAttribute("class", "cards");
        // cardsEl.appendChild(cardsContainer);

        const card = document.createElement("article");
        card.setAttribute("class", "card");
        cardsEl.appendChild(card);
        
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", value[i].image);
        card.appendChild(cardImg);
        
        const name = document.createElement("h4");
        name.innerHTML = value[i].name;
        card.appendChild(name);
        
        const position = document.createElement("p");
        position.innerHTML = value[i].position;
        card.appendChild(position);
    }
};

createCards()
