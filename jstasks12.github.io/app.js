const box = document.getElementsByClassName("box")[0];
const table = document.createElement("table");
table.classList.add("table");
table.classList.add("table-bordered");

// Создание таблицы
for (let i = 0; i < 3; i++) {
  const tr = document.createElement("tr");
  table.append(tr);
  for (let j = 0; j < 3; j++) {
    const td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    tr.append(td);
  }
}

//Подсчитываем сумму в стрках

let tdSum = 0;
for (let i = 0; i < table.children.length; i++) {
  let td = document.createElement("td");
  for (let j = 0; j < table.children.length; j++) {
    tdSum += +table.children[i].children[j].innerHTML;
  }
  td.innerHTML = tdSum;
  td.classList.add("summ");
  table.children[i].append(td);
  tdSum = 0;
}

//Подсчитываем сумму в столбцах
let tdSumCol = 0;
let tr = document.createElement("tr");

for (let i = 0; i < table.children.length; i++) {
  let td = document.createElement("td");
  for (let j = 0; j < table.children.length; j++) {
    tdSumCol += +table.children[j].children[i].innerHTML;
  }
  td.innerHTML = tdSumCol;
  td.classList.add("summ");
  tr.append(td);
  tdSumCol = 0;
}
tr.insertAdjacentHTML("beforeend", `<td class="summ">-</td>`);
table.append(tr);

//Находим кнопку добавления колонки
const addCol = document.getElementsByClassName("add-col")[0];
addCol.addEventListener("click", addColFun);

//Находим кнопку добавления строк
const addRow = document.getElementsByClassName("add-row")[0];
addRow.addEventListener("click", addRowFun);

//Добавление колонок

function addColFun() {
  //Удаляем столбец с суммой
  let table = document.getElementsByTagName("table")[0];
  for (let i = 0; i < table.children.length; i++) {
    table.children[i].lastChild.remove();
  }

  //Добавляем новый столбец
  for (let i = 0; i < table.children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    table.children[i].append(td);
  }

  //Подсчитываем сумму и добавляем в конец
  let tdSum = 0;
  for (let i = 0; i < table.children.length; i++) {
    let td = document.createElement("td");

    for (let j = 0; j < table.children[i].children.length; j++) {
      tdSum += +table.children[i].children[j].innerHTML;
    }
    td.innerHTML = tdSum;
    td.classList.add("summ");
    table.children[i].append(td);
    tdSum = 0;
  }
}

function addRowFun() {
  let tr = document.createElement("tr");
  for (let i = 0; i < table.children[0].children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    tr.append(td);
    table.append(tr);
  }
}

box.append(table);
