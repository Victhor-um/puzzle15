const panel = document.querySelector('.panel');
console.log('🚀 ~ file: index.js:2 ~ panel', panel);
const gameField = document.querySelector('.gameField ');
console.log('🚀 ~ file: index.js:4 ~ gameField', gameField);
let clicks;
generateRandomGameField();
function generateRandomGameField() {
  clicks = 0;
  panel.children[0].lastChild.textContent = clicks;
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

gameField.onclick = function (event) {
  console.log('🚀 ~ file: index.js:47 ~ panel', panel);
  const target = event.target.closest('td');
  console.log('🚀 ~ file: index.js:47 ~ target INNER TEXT', target.innerText);
  const trueNums = findEmptyElement(gameField);
  if (trueNums.some((elem) => elem === target.innerText)) {
    clicks += 1;
    if (panel.children[0].lastChild.textContent)
      panel.children[0].lastChild.textContent = clicks;
    console.log('TRUE NUMS WORKS: HA HA');
    wasteElement;
    console.log('🚀 ~ file: index.js:53 ~ wasteElement', wasteElement);
    wasteElement.innerText = target.innerText;
    target.innerText = '';
  }
};
let wasteElement;
function findEmptyElement(gameField) {
  const table = gameField.querySelector('table');
  console.log('🚀 ~ file: index.js:52 ~ findEmptyElement ~ table', table);
  console.log('table rows: ', table.rows);
  const availableTDs = [];
  const currentField = [];
  const wastePosition = [];
  for (let tr = 0; tr < table.rows.length; tr++) {
    const line = [];
    // console.log(
    //   '🚀 ~ file: index.js:58 ~ findEmptyElement ~ tr',
    //   table.rows[tr]
    // );
    for (let td = 0; td < table.rows[tr].cells.length; td++) {
      //   console.log(
      //     '🚀 ~ file: index.js:62 ~ findEmptyElement ~ td',
      //     table.rows[tr].cells[td].innerText
      //   );
      //Нахождение пустого элемента
      if (!table.rows[tr].cells[td].innerText) {
        wasteElement = table.rows[tr].cells[td];
        wastePosition.push(tr, td);
      }
      line.push(table.rows[tr].cells[td].innerText);
    }
    currentField.push(line);
  }

  console.log(
    '🚀 ~ file: index.js:75 ~ findEmptyElement ~ wastePosition',
    wastePosition
  );
  console.log(
    '🚀 ~ file: index.js:69 ~ findEmptyElement ~ currentField',
    currentField
  );
  //Заполняем доступные клетки для хода макс 4 мин 2

  const temp = wastePosition[0] + 1;
  console.log('🚀 ~ file: index.js:87 ~ findEmptyElement ~ temp', temp);

  if (temp >= 0 && temp < 4) {
    console.log('fist if: ');
    availableTDs.push(currentField[temp][wastePosition[1]]);
  }
  const temp2 = wastePosition[0] - 1;
  if (temp2 >= 0 && temp2 < 4) {
    availableTDs.push(currentField[temp2][wastePosition[1]]);
  }
  const temp3 = wastePosition[1] + 1;
  if (temp3 >= 0 && temp3 < 4) {
    availableTDs.push(currentField[wastePosition[0]][temp3]);
  }
  const temp4 = wastePosition[1] - 1;
  if (temp4 >= 0 && temp4 < 4) {
    availableTDs.push(currentField[wastePosition[0]][temp4]);
  }
  console.log(
    '🚀 ~ file: index.js:93 ~ findEmptyElement ~ availableTDs',
    availableTDs
  );
  return availableTDs;
}
