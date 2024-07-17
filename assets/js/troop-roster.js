const cardsEl = document.querySelector('.cards');

const key3 = [
    {name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Shawn Vehr', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Donald Craig', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Representative'}
];

const seniorPatrol = [
    {name:'Brighton S.', title:'Fancy Fishes', image:'./assets/images/SPL.JPG', rank:'Life Scout', position:'SPL'},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/ASPL.JPG', position:'ASPL'},
];

const fancyFishes = [
    {name:'Gavyn M.', title:"Fancy Fishes Patrol", image:'./assets/images/fancy-fishes.webp', rank:'Eagle Scout', position:'Junior Assistant Scoutmaster, Assistant Patrol Leader, Instructor'},
    {name:'Brighton S.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:'Senior Patrol Leader'},
    {name:'John Y.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Scout', position:'Patrol Leader'},
    {name:'William K.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:''}
];
    
const wetBandits = [
    {name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Life Scout', position:'Troop Guide'},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'Scribe'},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'ASPL'},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'Den Cheif'},
    {name:'Graysen M.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Second Class', position:'Quartermaster'},
    {name:'Grady W.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Star Scout', position:'Patrol Leader'},
    {name:'Gavin R.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Scout', position:'Assistant Patrol Leader'},
    {name:'John B.', title:'Wet Bandits Patrol', rank:'', image:'./assets/images/wet-bandits.JPG', position:''}
];

const fireChickens = [
    {name:'Brandon S.', title:'Fire Chickens Patrol', rank:'Star Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Hugh M.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Kyle S.', title:'Fire Chickens Patrol', rank:'Second Class', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Levi E.', title:'Fire Chickens Patrol', rank:'Second Class', image:'./assets/images/fire-chickens.png', position:'Patrol Leader'},
    {name:'Nicholas V.', title:'Fire Chickens Patrol', rank:'Second Class', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Steven W.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:'Chaplains Aide, Assistant Patrol Leader'},
    {name:'Walter L.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Chase G.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Luke R.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'David J.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Jack M.', title:'Fire Chickens Patrol', rank:'', image:'./assets/images/fire-chickens.png', position:''},
];

const turtles = [
    {name:'Eli E.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Arthur L.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Max L.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:'Patrol Leader'},
    {name:'Aiden L.', title:'Turtles Patrol', rank:'Tenderfoot', image:'./assets/images/Turtles.png', position:''},
    {name:'Zach R.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:'Assistant Patrol Leader'},
    {name:'Nolan S.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Robbie W.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Jojo L.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Lennon T.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Samuel P.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
];

const scoutMasters = [
    {name:'Blake Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Tom Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Andy Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Benjamin Schmitz', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'James Ridgeway',title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Jon Sears', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Derek Long', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Matt Ernst', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
];

const committee = [
    {name:'Nick Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Adopt-A-Mum Coordinator'},
    {name:'Angel Boeckman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Secretary aka "The Handler"'},
    {name:'Dennis Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Advancement Coordinator'},
    {name:'Tanya Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Melinda Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Recruitment Coordinator'},
    {name:'Andy Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Glen Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Webmaster, Equipment Coordinator'},
    {name:'Shawn Vehr', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Chair'},
    {name:'Derek Long', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Cobbler Coordinator, Shopping Coordinator'},
    {name:'Heather Long', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Shopping Coordinator'},
    {name:'Marc Sharpnack', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Chaplin'},
    {name:'Ben Lambers', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Benjamin Schmitz', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Coordinator, Transportation Coordinator'},
    {name:'Cid Ridgeway', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Scouting for Food Coordinator'},
    {name:'Bill Kaufman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Unit Scouter Reserve'},
    {name:'Steve Welker', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Ryan Hurst', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
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
        
        const currentRank = document.createElement("p");
        currentRank.innerHTML = value[i].rank;
        card.appendChild(currentRank);
        
        const position = document.createElement("p");
        position.innerHTML = value[i].position;
        card.appendChild(position);
    }
};

createCards()
