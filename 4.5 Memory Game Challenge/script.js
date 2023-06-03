const gameContainer = document.getElementById("game");

let cols = []

function randomColors() {
  let maxVal = 0xFFFFFF;
  let randomNumber = Math.random() * maxVal
  randomNumber = Math.floor(randomNumber)
  randomNumber = randomNumber.toString(16)
  let randColor = randomNumber.padStart(6, 0)
  cols.push(`#${randColor.toUpperCase()}`, `#${randColor.toUpperCase()}`)
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


let clicks = 0;

let score = document.getElementById('score')
score.innerText = String(clicks)

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
    newDiv.id = Math.random()
  }
}

let clickedCards = []
let matchedCards = []
let firstPick = null;

const startButton = document.getElementById('start')
startButton.addEventListener('click', startGame)
let leaderBoard = document.getElementById('leaderboard')

function startGame () {
  cols = []
  matchedCards = []
  gameContainer.innerHTML = ''
  clicks = 0
  score.innerText = String(clicks)

  let startingCards = document.getElementById('number').value
  for (let i=0; i<startingCards; i++) {
    randomColors();
  };
  let shuffledColors = shuffle(cols);
  createDivsForColors(shuffledColors);


}

window.addEventListener('load', function() {
  for (let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)

    let bestScore = document.createElement('span')
    bestScore.innerHTML = `<br>${key}: ${value}`
    leaderBoard.appendChild(bestScore)
  }
})

let clickedEvent = 0

function handleCardClick(event) {
  clicks++;
  score.innerText = String(clicks)

  event.target.style.backgroundColor = event.target.classList[0]
  clickedEvent++;
  clickedCards.push(event.target)
  let startingCards = document.getElementById('number').value

  // if (!firstPick) {
  //   firstPick = event.target
  // }

  if (clickedEvent>2) {
    flipAll()
  }
  else {
    if (clickedCards.length === 2) {
      let card1 = clickedCards[0]
      let card2 = clickedCards[1]
  
      let isMatch = checkForMatch(card1, card2);
      card1.classList.add(isMatch);
      card2.classList.add(isMatch);
  
      if (event.detail === 2) {
        flipSingle()
      }
  
      if (card1.classList.contains('nomatch') && card2.classList.contains('nomatch')) {
        setTimeout(reFlip, 1000)
      }

      if (card1.classList.contains('match') && card2.classList.contains('match')) {
        getMatch(card1, card2, startingCards)
      }
    }
  }
}

function getMatch (card1, card2, startingCards) {
  card1.classList.remove('nomatch')
  card2.classList.remove('nomatch')
  clickedCards = []
  matchedCards.push(card1, card2)
  if (matchedCards.length===startingCards*2) {
    win(startingCards)
  }
  clickedEvent = 0
}

function win(startingCards) {
  if(!localStorage.getItem(`${startingCards} matches`) || clicks < localStorage.getItem(`${startingCards} matches`)) {
    localStorage.setItem(`${startingCards} matches`, clicks)
  }
  let key = `${startingCards} matches`
  let value = localStorage.getItem(key)

  let bestScore = document.createElement('span')
  bestScore.innerHTML = `<br>${key}: ${value}`
  leaderBoard.appendChild(bestScore)
  clickedEvent = 0
}

function reFlip () {
  for (let card of clickedCards) {
    if (card.classList.contains('nomatch') && !card.classList.contains('match')) {
      card.style.backgroundColor = 'white'
    }
    clickedCards = []
  }
  clickedEvent = 0
}

function flipAll () {
  for (let card of clickedCards) {
    card.style.backgroundColor = 'white';
  }
  clickedEvent = 0
}

function flipSingle() {
  for (let card of clickedCards) {
    card.style.backgroundColor = 'white'
    card.classList.remove('match');
  }
  clickedCards = []
  clickedEvent = 0
}

function checkForMatch (card1, card2) {
  if (card1.classList[0] === card2.classList[0] && card1.id !== card2.id) {
    return 'match'
  }
  else {
    return 'nomatch'    
  }
  
}
