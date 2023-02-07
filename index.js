const panel = document.querySelector('.panel');
console.log('🚀 ~ file: index.js:2 ~ panel', panel);
const gameField = document.querySelector('.gameField ');
console.log('🚀 ~ file: index.js:4 ~ gameField', gameField);
generateRandomGameField();

function generateRandomGameField() {
  const oldTable = gameField.querySelector('table');
  oldTable.remove();
  let NUMBERS_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

  console.log('randomField');
  const gameTable = document.createElement('table');
  let gameNumbers = randomizeArray(NUMBERS_ARRAY);
  console.log(
    '🚀 ~ file: index.js:12 ~ generateRandomGameField ~ gameNumbers',
    gameNumbers
  );
  for (let i = 0; i < 4; i++) {
    let line = document.createElement('tr');

    for (let j = 0; j < 4; j++) {
      const td = document.createElement('td');
      td.innerText = gameNumbers[i + j];
      //   console.log(td);
      line.append(td);
      //   console.log(
      //     '🚀 ~ file: index.js:24 ~ generateRandomGameField ~ line',
      //     line
      //   );
    }
    gameNumbers.splice(0, 3);
    gameTable.append(line);
  }

  gameField.append(gameTable);
}
function randomizeArray(arr) {
  return arr.sort((a, b) => (-1) ** Math.ceil(Math.random() * 2));
}
const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', generateRandomGameField);
